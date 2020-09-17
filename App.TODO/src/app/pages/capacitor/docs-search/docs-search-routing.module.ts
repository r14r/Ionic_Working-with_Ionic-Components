import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsSearchPage } from './docs-search.page';

const routes: Routes = [
  {
    path: '',
    component: DocsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsSearchPageRoutingModule {}
