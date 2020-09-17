import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorGenPage } from './color-gen.page';

const routes: Routes = [
  {
    path: '',
    component: ColorGenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorGenPageRoutingModule {}
