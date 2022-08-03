import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-hello-badge',
    templateUrl: './hello-badge.component.html'
})
export class HelloBadgeComponent {
    @Input() name!: string;
}