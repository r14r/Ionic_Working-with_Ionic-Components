import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitorSiteFooterPage } from './capacitor-site-footer.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorSiteFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitorSiteFooterPageRoutingModule {}
