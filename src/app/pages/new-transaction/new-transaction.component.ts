import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TransactionCategory, TransactionKind, TransactionNew } from "src/app/models/transaction";
import { Router } from '@angular/router';
@Component({
    selector: "app-new-transaction",
    templateUrl: "./new-transaction.component.html",
})

export class NewTransactionComponent implements OnInit {
    constructor(private api: ApiService, private router: Router) { }

    public kinds: TransactionKind[] = [];
    public categories: TransactionCategory[] = [];

    public transactionForm: FormGroup = new FormGroup({
        value: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        paid_at: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        kind: new FormControl(null, [Validators.required]),
    });

    public onSubmit(): void {
        if (this.transactionForm.valid) {

            const data = {
                "value": parseFloat(this.transactionForm.value.value),
                "description": this.transactionForm.value.description,
                "paid_at": this.transactionForm.value.paid_at,
                "transaction_category_id": this.transactionForm.value.category.id,
                "kind": this.transactionForm.value.kind.id,
            }

            this.api.post<any>('transactions', data).then((data) => {
                this.router.navigate(['/transactions']);
            }).catch((error) => {
                console.log(error);
            });

        }
    }

    ngOnInit(): void {

        this.api.get<TransactionNew>('/transaction/new',).then((data) => {
            this.kinds = data.kinds;
            this.categories = data.categories;

            this.transactionForm.patchValue({
                kind: this.kinds[0],
                category: this.categories[0]
            });

        });
    }
}