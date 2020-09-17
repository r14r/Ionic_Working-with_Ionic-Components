import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitorSiteRoutesPage } from './capacitor-site-routes.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorSiteRoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitorSiteRoutesPageRoutingModule {}
