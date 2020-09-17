import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SteppedColorGeneratorPage } from './stepped-color-generator.page';

const routes: Routes = [
  {
    path: '',
    component: SteppedColorGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SteppedColorGeneratorPageRoutingModule {}
