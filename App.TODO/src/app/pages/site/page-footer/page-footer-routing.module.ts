import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFooterPage } from './page-footer.page';

const routes: Routes = [
  {
    path: '',
    component: PageFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFooterPageRoutingModule {}
