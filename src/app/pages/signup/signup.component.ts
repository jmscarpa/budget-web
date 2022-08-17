import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"]
})

export class SignupComponent {
    constructor(private location: Location, private router: Router, private api: ApiService) { }

    public form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        password_confirmation: new FormControl('', [Validators.required]),
    });

    public onSubmit(): void {
        if (this.form.valid) {
            const data = {
                "email": this.form.value.email,
                "password": this.form.value.password,
                "password_confirmation": this.form.value.password_confirmation,
            }

            this.api.post<any>('users', data).then((_) => {
                localStorage.setItem('email', this.form.value.email);
                this.router.navigate(['']);
            }).catch((error) => {
                alert(error.error);
            })
        } else {
            alert("Form is invalid");
        }
    }

    public navigateBackToLogin(): void {
        this.router.navigate(['/login']);
    }
}