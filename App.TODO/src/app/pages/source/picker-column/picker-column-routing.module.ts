import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerColumnPage } from './picker-column.page';

const routes: Routes = [
  {
    path: '',
    component: PickerColumnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerColumnPageRoutingModule {}
