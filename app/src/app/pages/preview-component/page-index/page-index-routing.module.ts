import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageIndexPage } from './page-index.page';

const routes: Routes = [
  {
    path: '',
    component: PageIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageIndexPageRoutingModule {}
