import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnchorLinkPage } from './anchor-link.page';

const routes: Routes = [
  {
    path: '',
    component: AnchorLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnchorLinkPageRoutingModule {}
