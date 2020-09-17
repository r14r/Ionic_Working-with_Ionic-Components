import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionPagePage } from './solution-page.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionPagePageRoutingModule {}
