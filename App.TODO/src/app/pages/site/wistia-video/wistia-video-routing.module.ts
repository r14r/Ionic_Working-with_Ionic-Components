import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WistiaVideoPage } from './wistia-video.page';

const routes: Routes = [
  {
    path: '',
    component: WistiaVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WistiaVideoPageRoutingModule {}
