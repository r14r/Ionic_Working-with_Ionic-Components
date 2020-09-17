import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMarkedPage } from './app-marked.page';

const routes: Routes = [
  {
    path: '',
    component: AppMarkedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMarkedPageRoutingModule {}
