import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContributorListPage } from './contributor-list.page';

const routes: Routes = [
  {
    path: '',
    component: ContributorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributorListPageRoutingModule {}
