import { Component, Input } from "@angular/core";
import { Transaction } from "src/app/models/transaction";

@Component({
    selector: 'app-transaction-card',
    templateUrl: './transaction-card.component.html',
})

export class TransactionCardComponent {
    @Input() transaction!: Transaction;
}