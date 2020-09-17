import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InPageNavigationPage } from './in-page-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: InPageNavigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InPageNavigationPageRoutingModule {}
