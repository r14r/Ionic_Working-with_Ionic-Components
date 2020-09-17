import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreFooterPage } from './pre-footer.page';

const routes: Routes = [
  {
    path: '',
    component: PreFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreFooterPageRoutingModule {}
