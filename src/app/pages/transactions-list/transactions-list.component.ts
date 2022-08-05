import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionIndex } from 'src/app/models/transaction';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
})

export default class TransactionsListComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  public transactions: Transaction[] = [];
  public budgetAvaliable: number = 0;

  public loadingTransactions: boolean = true;

  ngOnInit(): void {
    this.getAllTransactions();
  }

  /**
   * Api fetch
   */

   public getAllTransactions(): void {
    this.loadingTransactions = true;
    this.api.get<TransactionIndex>('/transactions').then((data) => {
      this.transactions = data.transactions;
      this.budgetAvaliable = data.budget;
      this.loadingTransactions = false;
    });
  }

  public filterTransactions(filter : object): void {
    this.loadingTransactions = true;
    this.api.get<TransactionIndex>('/transactions', filter).then((data) => {
      this.transactions = data.transactions;
      this.budgetAvaliable = data.budget;
      this.loadingTransactions = false;
    });
  }

  /**
   * Navigation
   */

  public navigateToTransaction(transactionId: number): void {
    this.router.navigate(['/transaction', transactionId]);
  }

  public navigateToNewTransaction(): void {
    this.router.navigate(['/transactions', 'new']);
  }
}

