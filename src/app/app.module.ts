import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloBadgeComponent } from './components/hello-badge/hello-badge.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

import { HomeComponent } from './pages/home/home.component';
import TransactionsListComponent from './pages/transactions-list/transactions-list.component';
import { TransactionDetailsComponent } from './pages/transactions-details/transaction-details.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { EditTransactionComponent } from './pages/edit-transaction/edit-transaction.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LayoutComponent } from './pages/layout/layout.component';

import { TransactionCategoriesListComponent } from './pages/transaction-categories-list/transaction-categories-list.component';
import { NewTransactionCategoryComponent } from './pages/new-transaction-category/new-transaction-category.component';
import { EditTransactionCategoryComponent } from './pages/edit-transaction-category/edit-transaction-category.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { TransactionCategoriesTableComponent } from './components/transaction-categories-table/transaction-categories-table.component';

import { ReactiveFormsModule } from '@angular/forms';

import { TransactionKindPipe } from 'src/pipes/transaction-kind-pipe';
import { CurrencyPipe } from '@angular/common';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    HelloBadgeComponent,
    HomeComponent,
    TransactionsListComponent,
    TransactionDetailsComponent,
    NewTransactionComponent,
    SpinnerLoadingComponent,
    EditTransactionComponent,
    TransactionCategoriesListComponent,
    NewTransactionCategoryComponent,
    EditTransactionCategoryComponent,
    TransactionsTableComponent,
    GenericTableComponent,
    TransactionCategoriesTableComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LayoutComponent
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [TransactionKindPipe, CurrencyPipe, { provide: LOCALE_ID, useValue: 'pt' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
