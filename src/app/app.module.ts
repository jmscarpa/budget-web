import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloBadgeComponent } from './components/hello-badge/hello-badge.component';

import { HomeComponent } from './pages/home/home.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloBadgeComponent,
    HomeComponent,
    TransactionsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
