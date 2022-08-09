import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Transaction, TransactionNew, TransactionType } from "src/app/models/transaction";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-edit-transaction",
    templateUrl: "./edit-transaction.component.html",
})

export class EditTransactionComponent implements OnInit {
    constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

    private transactionId: number = this.route.snapshot.params.id;

    public transaction?: Transaction;

    public transactionTypes: TransactionType[] = [];

    public loadingTransaction: boolean = true;

    public transactionForm: FormGroup = new FormGroup({
        value: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        transactionDate: new FormControl('', [Validators.required]),
        transactionType: new FormControl(null, [Validators.required]),
    });

    public onSubmit(): void {
        const transaction: Transaction = this.transactionForm.value;

        this.api.patch<any>(`transaction/${this.transactionId}`, transaction).then((data) => {

            this.transactionForm.patchValue({
                value: '',
                description: '',
                transactionDate: '',
                transactionType: '',
            });

            this.router.navigate(["/transactions"]);

        }).catch((error) => {
            console.log(error);
        });
    }


    ngOnInit(): void {
        this.api.get<TransactionNew>(`transactions/${this.transactionId}/new`).then((data) => {
            this.loadingTransaction = false;
            this.transactionTypes = data.transaction_types;
            this.transaction = data.transaction;

            this.transactionForm.patchValue({
                value: this.transaction.value,
                description: this.transaction.description, 
                transactionDate: this.transaction.transaction_date,
                transactionType: this.transaction.transaction_type.id,
            });
        });
    }
}