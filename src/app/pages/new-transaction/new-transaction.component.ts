import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TransactionKind, TransactionNew } from "src/app/models/transaction";
import { Router } from '@angular/router';
@Component({
    selector: "app-new-transaction",
    templateUrl: "./new-transaction.component.html",
})

export class NewTransactionComponent implements OnInit {
    constructor(private api: ApiService, private router: Router) { }

    public kinds: TransactionKind[] = [];

    public transactionForm: FormGroup = new FormGroup({
        value: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        payd_at: new FormControl('', [Validators.required]),
        kind: new FormControl(null, [Validators.required]),
    });

    public onSubmit(): void {
        if (this.transactionForm.valid) {

            const data = {
                "value": parseFloat(this.transactionForm.value.value),
                "description": this.transactionForm.value.description,
                "payd_at": this.transactionForm.value.transactionDate,
                "kind": this.transactionForm.value.transactionType,
            }


            this.api.post<any>('transactions', data).then((data) => {
                console.log("sucesso!");
            }).catch((error) => {
                console.log(error);
            });


        }
    }

    ngOnInit(): void {

        this.api.get<TransactionNew>('/transaction/new',).then((data) => {
            this.kinds = data.kinds;

            this.transactionForm.patchValue({
                kind: this.kinds[0].id
            });

        });
    }
}