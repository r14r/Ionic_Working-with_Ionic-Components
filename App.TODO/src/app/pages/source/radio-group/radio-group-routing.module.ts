import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioGroupPage } from './radio-group.page';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioGroupPageRoutingModule {}
