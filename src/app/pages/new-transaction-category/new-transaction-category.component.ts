import { Component } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    selector: "app-new-transaction-category",
    templateUrl: "./new-transaction-category.component.html",
})

export class NewTransactionCategoryComponent {
    constructor(private api: ApiService, private router: Router) { }

    public transactionCategoryForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
    });

    public onSubmit(): void {
        if (this.transactionCategoryForm.valid) {

            const data = {
                "name": this.transactionCategoryForm.value.name,
            }

            this.api.post<any>('transaction-categories', data).then((data) => { 
                this.router.navigate(['/transaction-categories']);
            }).catch((error) => { })
        }
    }
}