import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavLinkPage } from './nav-link.page';

const routes: Routes = [
  {
    path: '',
    component: NavLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavLinkPageRoutingModule {}
