import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectsPage } from './selects.page';

const routes: Routes = [
  {
    path: '',
    component: SelectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectsPageRoutingModule {}
