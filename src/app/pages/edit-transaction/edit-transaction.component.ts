import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Transaction, TransactionEdit, TransactionKind } from "src/app/models/transaction";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-edit-transaction",
    templateUrl: "./edit-transaction.component.html",
})

export class EditTransactionComponent implements OnInit {
    constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

    private id: number = this.route.snapshot.params.id;

    public transaction?: Transaction;

    public kinds: TransactionKind[] = [];

    public loadingTransaction: boolean = true;

    public transactionForm: FormGroup = new FormGroup({
        value: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        payd_at: new FormControl('', [Validators.required]),
        kind: new FormControl(null, [Validators.required]),
    });

    public onSubmit(): void {
        const transaction: Transaction = this.transactionForm.value;

        this.api.patch<any>(`transaction/${this.id}`, transaction).then((data) => {
            this.transactionForm.patchValue({
                value: '',
                description: '',
                payd_at: '',
                kind: '',
            });

            this.router.navigate(["/transactions"]);

        }).catch((error) => {
            console.log(error);
        });
    }


    ngOnInit(): void {
        this.api.get<TransactionEdit>(`transactions/${this.id}/edit`).then((data) => {
            this.loadingTransaction = false;
            this.kinds = data.kinds;
            this.transaction = data.transaction;

            this.transactionForm.patchValue({
                value: this.transaction.value,
                description: this.transaction.description, 
                payd_at: this.transaction.paid_at,
                kind: this.transaction.kind,
            });
        });
    }
}