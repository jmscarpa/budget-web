import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { TransactionDetailsComponent } from './pages/transactions-details/transaction-details.component';
import { EditTransactionComponent } from './pages/edit-transaction/edit-transaction.component';
import TransactionsListComponent from './pages/transactions-list/transactions-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions', component: TransactionsListComponent },
  { path: 'transaction/:id', component: TransactionDetailsComponent },
  { path: 'transactions/new', component: NewTransactionComponent },
  { path: 'transactions/:id/new', component: EditTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
