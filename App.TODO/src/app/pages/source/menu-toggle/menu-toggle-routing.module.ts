import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTogglePage } from './menu-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTogglePageRoutingModule {}
