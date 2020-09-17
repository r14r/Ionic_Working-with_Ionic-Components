import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentComponentPage } from './document-component.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentComponentPageRoutingModule {}
