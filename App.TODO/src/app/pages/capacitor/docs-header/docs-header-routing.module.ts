import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsHeaderPage } from './docs-header.page';

const routes: Routes = [
  {
    path: '',
    component: DocsHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsHeaderPageRoutingModule {}
