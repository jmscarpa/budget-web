import { Component, Input } from "@angular/core";
import { Transaction } from "src/app/models/transaction";
import { TransactionKindPipe } from 'src/pipes/transaction-kind-pipe';


@Component({
    selector: "app-transactions-table",
    templateUrl: "./transactions-table.component.html",
})

export class TransactionsTableComponent {
    @Input() transactions: Transaction[] = [];

    constructor () {}
}