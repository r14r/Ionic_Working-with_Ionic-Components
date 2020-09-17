import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewColorGeneratorPage } from './new-color-generator.page';

const routes: Routes = [
  {
    path: '',
    component: NewColorGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewColorGeneratorPageRoutingModule {}
