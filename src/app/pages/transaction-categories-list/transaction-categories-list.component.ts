import { Component, OnInit } from "@angular/core";
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { TransactionCategory } from "src/app/models/transaction";

@Component({
    selector: "app-transaction-categories-list",
    templateUrl: "./transaction-categories-list.component.html",
})

export class TransactionCategoriesListComponent implements OnInit {
    constructor(private api: ApiService, private router: Router) { }

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
        this.api.get<TransactionCategory[]>('transaction-categories').then((data) => {
            this.transactionCategories = data;
            this.loadingCategories = false;
        });
    }

    public deleteTransactionCategory(categoryId: number): void {
        this.api.delete<any>(`transaction-categories/${categoryId}`).then((_) => {
            this.getAllTransactionCategories();
        })
    }

    /**
    * Navigation
    */

    public navigateToNewCategory(): void {
        this.router.navigate(['/transaction-categories/new']);
    }

    public navigateToEditCategory(categoryId: number): void{
        this.router.navigate(['/transaction-categories', categoryId]);
    }
}