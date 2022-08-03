import { Component } from "@angular/core";
import { Transaction } from "src/app/models/transaction";

@Component({
    selector: 'app-transactions-list',
    templateUrl: './transactions-list.component.html'
})
export class TransactionsListComponent {
    public transactions: Transaction[] = [
        {
            id: 1,
            value: 10,
            kind: 'outcome',
            date_of_transaction: "24/10/2022",
            description: 'outcome1'
        },
        {
            id: 2,
            value: 100,
            kind: 'income',
            date_of_transaction: "25/10/2022",
            description: 'income1'
        }
    ]
}