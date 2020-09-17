import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreButtonPage } from './more-button.page';

const routes: Routes = [
  {
    path: '',
    component: MoreButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreButtonPageRoutingModule {}
