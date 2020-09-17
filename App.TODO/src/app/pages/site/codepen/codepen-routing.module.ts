import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodepenPage } from './codepen.page';

const routes: Routes = [
  {
    path: '',
    component: CodepenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodepenPageRoutingModule {}
