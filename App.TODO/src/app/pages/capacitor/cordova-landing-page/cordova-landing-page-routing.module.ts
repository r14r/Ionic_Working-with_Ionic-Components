import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordovaLandingPagePage } from './cordova-landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: CordovaLandingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CordovaLandingPagePageRoutingModule {}
