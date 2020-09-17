import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NativeEntInstallPage } from './native-ent-install.page';

const routes: Routes = [
  {
    path: '',
    component: NativeEntInstallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NativeEntInstallPageRoutingModule {}
