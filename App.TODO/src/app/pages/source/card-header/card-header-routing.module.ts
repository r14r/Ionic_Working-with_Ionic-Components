import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardHeaderPage } from './card-header.page';

const routes: Routes = [
  {
    path: '',
    component: CardHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardHeaderPageRoutingModule {}
