import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterOutletPage } from './router-outlet.page';

const routes: Routes = [
  {
    path: '',
    component: RouterOutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterOutletPageRoutingModule {}
