import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DocumentsComponent } from './documents.component';

const routes: Routes = Route.withShell([
  { path: 'documents', component: DocumentsComponent, data: { title: extract('Documents') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DocumentsRoutingModule { }
