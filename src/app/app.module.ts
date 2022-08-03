import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HelloBadgeComponent } from './components/hello-badge/hello-badge.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloBadgeComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
