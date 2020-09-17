import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMenuTogglePage } from './app-menu-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: AppMenuTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMenuTogglePageRoutingModule {}
