import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"]
})

export class SignupComponent {
    constructor(private location: Location) { }

    public onSubmit(): void {
        console.log("SignupComponent.onSubmit()");
        this.location.back();
    }
}