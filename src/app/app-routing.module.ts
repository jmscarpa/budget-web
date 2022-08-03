import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'transactions', component: TransactionsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
