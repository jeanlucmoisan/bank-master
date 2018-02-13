import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AccountsComponent } from './accounts.component';

const routes: Routes = Route.withShell([
  { path: 'accounts', component: AccountsComponent, data: { title: extract('Accounts') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountsRoutingModule { }
