import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { TransactionCategory } from "src/app/models/transaction";

@Component({
    selector: "app-edit-transaction-category",
    templateUrl: "./edit-transaction-category.component.html",
})

export class EditTransactionCategoryComponent implements OnInit {
    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

    public transactionCategory!: TransactionCategory;

    private transactionCategoryId: number = this.route.snapshot.params.id;

    public loadingTransactionCategory: boolean = true;

    public transactionCategoryForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
    })

    public onSubmit(): void {

        const data = {
            "name": this.transactionCategoryForm.value.name,
        }

        this.api.patch<any>(`transaction-categories/${this.transactionCategoryId}`, data).then((_) => { 
            this.router.navigate(['/transaction-categories']);
        }).catch((error
        ) => { });

    }

    ngOnInit(): void {
        this.api.get<TransactionCategory>(`transaction-categories/${this.transactionCategoryId}`).then((data) => {
            this.transactionCategory = data;
            this.transactionCategoryForm.patchValue({
                name: this.transactionCategory.name,
            });
            this.loadingTransactionCategory = false;

        });
    }
}