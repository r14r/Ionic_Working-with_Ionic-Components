import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteBackdropPage } from './site-backdrop.page';

const routes: Routes = [
  {
    path: '',
    component: SiteBackdropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteBackdropPageRoutingModule {}
