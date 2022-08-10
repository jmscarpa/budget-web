import { Component, Input } from "@angular/core";
import { Transaction } from "src/app/models/transaction";
import { TransactionKindPipe } from 'src/pipes/transaction-kind-pipe';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: "app-transactions-table",
    templateUrl: "./transactions-table.component.html",
})

export class TransactionsTableComponent {

    constructor(private api: ApiService, private router: Router) { }

    @Input() transactions: Transaction[] = [];
    @Input() refresh!: () => void;

    public deleteTransaction(transactionId: number): void {
        // this.refresh();
        this.api.delete<any>(`transaction/${transactionId}`).then((_) => {
            this.refresh();
        });
    }

    public navigateToEditTransaction(transactionId: number): void {
        this.router.navigate(['/transactions', transactionId, 'new']);
    }
}