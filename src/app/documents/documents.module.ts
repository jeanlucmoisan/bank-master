import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DocumentsRoutingModule
  ],
  declarations: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
