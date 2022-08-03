import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionIndex } from 'src/app/models/transaction';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',

})

export default class TransactionsListComponent implements OnInit {

  constructor(private api: ApiService) { }

  public transactions: Transaction[] = [];
  public budgetAvaliable: number = 0;

  ngOnInit(): void {
    this.api.get<TransactionIndex>('/transactions').then((data) =>{
      this.transactions = data.transactions;
      this.budgetAvaliable = data.budget;
    });
  }

}
