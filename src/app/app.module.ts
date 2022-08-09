import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloBadgeComponent } from './components/hello-badge/hello-badge.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { TransactionCategoryCardComponent } from './components/transaction-category-card/transaction-category-card.component';

import { HomeComponent } from './pages/home/home.component';
import TransactionsListComponent from './pages/transactions-list/transactions-list.component';
import { TransactionDetailsComponent } from './pages/transactions-details/transaction-details.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { EditTransactionComponent } from './pages/edit-transaction/edit-transaction.component';

import { TransactionCategoriesListComponent } from './pages/transaction-categories-list/transaction-categories-list.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloBadgeComponent,
    HomeComponent,
    TransactionsListComponent,
    TransactionCardComponent,
    TransactionDetailsComponent,
    NewTransactionComponent,
    SpinnerLoadingComponent,
    EditTransactionComponent,
    TransactionCategoriesListComponent,
    TransactionCategoryCardComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
