import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
    constructor(private api: ApiService, private router: Router) { }

    public onSubmit(): void{
        this.router.navigate(['']);
    }
}