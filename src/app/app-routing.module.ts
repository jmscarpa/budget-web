import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { TransactionDetailsComponent } from './pages/transactions-details/transaction-details.component';
import { EditTransactionComponent } from './pages/edit-transaction/edit-transaction.component';
import TransactionsListComponent from './pages/transactions-list/transactions-list.component';
import { TransactionCategoriesListComponent } from './pages/transaction-categories-list/transaction-categories-list.component';
import { NewTransactionCategoryComponent } from './pages/new-transaction-category/new-transaction-category.component';
import { EditTransactionCategoryComponent } from './pages/edit-transaction-category/edit-transaction-category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions', component: TransactionsListComponent },
  { path: 'transaction/:id', component: TransactionDetailsComponent },
  { path: 'transactions/new', component: NewTransactionComponent },
  { path: 'transactions/:id/new', component: EditTransactionComponent },
  { path: 'transaction-categories', component: TransactionCategoriesListComponent },
  { path: 'transaction-categories/new', component: NewTransactionCategoryComponent },
  { path: 'transaction-categories/:id', component: EditTransactionCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
