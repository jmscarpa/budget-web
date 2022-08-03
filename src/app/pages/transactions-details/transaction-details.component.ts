import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { Transaction } from "src/app/models/transaction";

@Component({
    selector: "app-transaction-details",
    templateUrl: "./transaction-details.component.html",
})

export class TransactionDetailsComponent implements OnInit{
    constructor(private api:ApiService, private route: ActivatedRoute) { }

    private transactionId: number = this.route.snapshot.params.id;

    public transaction?: Transaction;

    ngOnInit(): void {
        this.api.get<Transaction>(`/transaction/${this.transactionId}`).then((data) => {
            this.transaction = data;
        })
    }
}