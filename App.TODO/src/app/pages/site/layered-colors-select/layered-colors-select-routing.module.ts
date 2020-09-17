import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayeredColorsSelectPage } from './layered-colors-select.page';

const routes: Routes = [
  {
    path: '',
    component: LayeredColorsSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayeredColorsSelectPageRoutingModule {}
