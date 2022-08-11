import { Component, Input } from "@angular/core";
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { TransactionCategory } from "src/app/models/transaction";

@Component({
    selector: "app-transaction-categories-table",
    templateUrl: "./transaction-categories-table.component.html",
})

export class TransactionCategoriesTableComponent {
    constructor(private api: ApiService, private router: Router) { }

    @Input() categories: TransactionCategory[] = [];
    @Input() refresh!: () => void;

    /**
     * Api
    */
    public deleteTransactionCategory(categoryId: number): void {
        this.api.delete<any>(`transaction-categories/${categoryId}`).then((_) => {
            this.refresh();
        })
    }

    /**
    * Navigation
    */
    public navigateToEditCategory(categoryId: number): void {
        this.router.navigate(['/transaction-categories', categoryId]);
    }

}