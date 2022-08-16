import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
    constructor(private router: Router) { }

    public userEmail: string | null = localStorage.getItem('email');

    public logout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    // Navigate
    public navigate(pageIndex: number): void {
        switch (pageIndex) {
            case 0:
                this.router.navigate(['/']);
                break;
            case 1:
                this.router.navigate(['/transactions']);
                break;
            case 2:
                this.router.navigate(['/transaction-categories']);
                break;
            default:
                this.router.navigate(['/']);
                break;
        }
    }
}