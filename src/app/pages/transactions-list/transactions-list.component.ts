import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionIndex } from 'src/app/models/transaction';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { TransactionKindPipe } from 'src/pipes/transaction-kind-pipe';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
})

export default class TransactionsListComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  public transactions: Transaction[] = [];
  public budgetAvaliable: number = 0;

  public loadingTransactions: boolean = true;

  public listHeaders: string[] = ['Código', 'Valor', 'Descrição', 'Data do pagamento', 'Categoria', 'Tipo'];

  get computedRows() {
    return this.transactions.map((transaction) => {
      return {
        Código: transaction.id,
        Valor: new CurrencyPipe('pt', 'BRL').transform(transaction.value, 'BRL', 'symbol-narrow', '1.2-2'),
        Descrição: transaction.description.charAt(0).toUpperCase() + transaction.description.slice(1).toLowerCase(),
        'Data do pagamento': new Date(transaction.paid_at).toLocaleDateString('pt-BR'),
        Categoria: transaction.category_name,
        Tipo: new TransactionKindPipe().transform(transaction.kind.toString()),
      };
    });
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  /**
   * Api
   */
  public getAllTransactions(): void {
    this.loadingTransactions = true;
    this.api.get<TransactionIndex>('/transactions').then((data) => {
      this.transactions = data.transactions;
      this.budgetAvaliable = data.budget;
      this.loadingTransactions = false;
    });
  }

  public filterTransactions(filter: object): void {
    this.loadingTransactions = true;
    this.api.get<TransactionIndex>('/transactions', filter).then((data) => {
      this.transactions = data.transactions;
      this.budgetAvaliable = data.budget;
      this.loadingTransactions = false;
    });
  }

  public deleteTransaction(transactionId: number): void {
    this.api.delete<Transaction>(`/transactions/${transactionId}`).then(() => {
      this.getAllTransactions();
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

  public navigateToEditTransaction(transactionId: number): void {
    this.router.navigate(['/transactions', transactionId, 'new']);
  }
}

