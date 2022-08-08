import { Component, Input } from "@angular/core";
import { Transaction } from "src/app/models/transaction";
import { Router } from "@angular/router";

@Component({
    selector: 'app-transaction-card',
    templateUrl: './transaction-card.component.html',
})

export class TransactionCardComponent {
    constructor(private router: Router) { }

    @Input() transaction!: Transaction;
    @Input() showDetails: boolean = false;
    @Input() showButtons: boolean = true;
    @Input() delete!: (transactionId: number) => void;
    @Input() show!: (transactionId: number) => void;
    @Input() edit!: (transaction: Transaction) => void;
}