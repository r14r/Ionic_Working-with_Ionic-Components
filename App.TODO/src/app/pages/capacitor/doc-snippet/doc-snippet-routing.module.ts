import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocSnippetPage } from './doc-snippet.page';

const routes: Routes = [
  {
    path: '',
    component: DocSnippetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocSnippetPageRoutingModule {}
