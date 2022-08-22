import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ResetPasswordToken } from "src/app/models/password-recovery";

enum ForgotPasswordSteps {
    EMAIL,
    RESET_PASSWORD,
}

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
    constructor(private api: ApiService, private router: Router) { }

    public forgotPasswordSteps = ForgotPasswordSteps;
    public currentStep: ForgotPasswordSteps = ForgotPasswordSteps.EMAIL;

    public resetPasswordToken: string = '';
    private userEmail: string = '';

    public emailForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required])
    });

    public tokenForm: FormGroup = new FormGroup({
        token: new FormControl('', [Validators.required])
    })

    public passwordForm: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required]),
        passwordConfirmation: new FormControl('', [Validators.required])
    });

    public sendToken(): void {
        if (this.emailForm.valid) {
            this.userEmail = this.emailForm.value.email;

            const data = {
                "email": this.emailForm.value.email
            }

            this.api.post<ResetPasswordToken>('passwords', data).then((apiData) => {
                this.resetPasswordToken = apiData.token;
                this.currentStep = ForgotPasswordSteps.RESET_PASSWORD;
                
                this.tokenForm.patchValue({
                    token: this.resetPasswordToken,
                });

            }).catch((error) => {
                alert(error.error);
            })
        } else {
            alert("Invalid form");
        }
    }

    public resetPassword(): void {
        if (this.tokenForm.valid) {

            const data = {
                "reset_password_token": this.tokenForm.value.token,
                "password": "",
                "password_confirmation": ""
            }

            if (this.passwordForm.valid) {
                data["password"] = this.passwordForm.value.password;
                data["password_confirmation"] = this.passwordForm.value.passwordConfirmation;

                this.api.patch<any>('passwords', data).then((_) => {
                    alert("Senha alterada com sucesso");
                    localStorage.setItem('email', this.userEmail);
                    this.router.navigate(['']);
                }).catch((error) => {
                    alert(error.error);
                })
            } else {
                alert("Senha inválida");
            }
        } else {
            alert("Token inválido");
        }
    }
}