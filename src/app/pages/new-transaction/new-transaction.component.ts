import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TransactionType, TransactionTypes, Transaction } from "src/app/models/transaction";
import { Router } from '@angular/router';
@Component({
    selector: "app-new-transaction",
    templateUrl: "./new-transaction.component.html",
})

export class NewTransactionComponent implements OnInit {
    constructor(private api: ApiService, private router: Router) {
        this.transaction = this.router.getCurrentNavigation()?.extras.state as Transaction
    }

    public transaction?: Transaction;

    public transactionTypes: TransactionType[] = [];

    private editTransaction: boolean = false;

    public transactionForm: FormGroup = new FormGroup({
        value: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        transactionDate: new FormControl('', [Validators.required]),
        transactionType: new FormControl(null, [Validators.required]),
    });

    public onSubmit(): void {
        if (this.transactionForm.valid) {

            const data = {
                "value": parseFloat(this.transactionForm.value.value),
                "description": this.transactionForm.value.description,
                "transaction_date": this.transactionForm.value.transactionDate,
                "transaction_type_id": this.transactionForm.value.transactionType,
            }

            if (!this.editTransaction) {
                this.api.post<any>('transactions', data).then((data) => {
                    console.log("sucesso!");
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                this.api.patch<any>(`transaction/${this.transaction?.id}`, data).then((data) => {}).catch((error) => {});
            }

        }
    }

    ngOnInit(): void {

        if (this.transaction) {
            this.editTransaction = true;

            this.transactionForm.patchValue({
                value: this.transaction.value,
                description: this.transaction.description,
                transactionDate: this.transaction.transaction_date,
                transactionType: this.transaction.transaction_type.id
            });
        }

        this.api.get<TransactionTypes>('/transaction/new',).then((data) => {
            this.transactionTypes = data.transaction_types;

            if (!this.editTransaction) {
                this.transactionForm.patchValue({
                    transactionType: this.transactionTypes[0].id
                });
            }
        });
    }
}