import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
    constructor(private router: Router, private authService: AuthService) { }

    public userEmail: string | null = localStorage.getItem('email');

    public pageIndex: number = 0;

    public logout(): void {
        this.authService.clear();
        this.router.navigate(['/login']);
    }


    // Navigate
    public navigate(pageIndex: number): void {
        switch (pageIndex) {
            case 0:
                this.router.navigate(['/']);
                this.pageIndex = 0;
                break;
            case 1:
                this.router.navigate(['/transactions']);
                this.pageIndex = 1;
                break;
            case 2:
                this.router.navigate(['/transaction-categories']);
                this.pageIndex = 2;
                break;
            default:
                this.router.navigate(['/']);
                this.pageIndex = 0;
                break;
        }
    }
}