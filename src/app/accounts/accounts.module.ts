import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AccountsRoutingModule
  ],
  declarations: [
    AccountsComponent
  ]
})
export class AccountsModule { }
