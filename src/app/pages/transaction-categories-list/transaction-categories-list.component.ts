import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { TransactionCategory } from "src/app/models/transaction";

@Component({
    selector: "app-transaction-categories-list",
    templateUrl: "./transaction-categories-list.component.html",
})

export class TransactionCategoriesListComponent implements OnInit{
    constructor(private api: ApiService) { }

    public transactionCategories: TransactionCategory[] = [];
    public loadingCategories: boolean = true;

    ngOnInit(): void {
        this.getAllTransactionCategories();
    }

    /**
     * Api
     */

    public getAllTransactionCategories(): void {
        this.loadingCategories = true;
        this.api.get<TransactionCategory[]>('transaction_types').then((data) => {
            this.transactionCategories = data;
            this.loadingCategories = false;
        });
    }
}