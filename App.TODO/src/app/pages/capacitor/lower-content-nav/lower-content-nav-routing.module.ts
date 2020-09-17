import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LowerContentNavPage } from './lower-content-nav.page';

const routes: Routes = [
  {
    path: '',
    component: LowerContentNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LowerContentNavPageRoutingModule {}
