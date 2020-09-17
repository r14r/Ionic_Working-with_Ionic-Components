import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuButtonPage } from './menu-button.page';

const routes: Routes = [
  {
    path: '',
    component: MenuButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuButtonPageRoutingModule {}
