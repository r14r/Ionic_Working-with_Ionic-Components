import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitorSitePage } from './capacitor-site.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitorSitePageRoutingModule {}
