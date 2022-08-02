import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-badge',
  templateUrl: './hello-badge.component.html',
  styleUrls: ['./hello-badge.component.scss'],
})
export class HelloBadgeComponent {
  @Input() name: string = '';

  public sayHello(): void {
    alert(`Hello, ${this.name}!`);
  }
}
