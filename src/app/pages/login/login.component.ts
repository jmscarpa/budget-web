import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from "src/app/services/api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent {
    constructor(private api: ApiService, private router: Router) {
    }

    public form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    public onSubmit(): void {
        localStorage.setItem('email', this.form.value.email);
        this.router.navigate(['']);
    }

    public navigateToForgotPassword(): void {
        this.router.navigate(['forgot-password']);
    }

    public navigateToSignup(): void {
        this.router.navigate(['signup']);
    }

}