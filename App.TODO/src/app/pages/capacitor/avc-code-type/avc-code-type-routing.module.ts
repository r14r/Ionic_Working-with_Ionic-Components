import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvcCodeTypePage } from './avc-code-type.page';

const routes: Routes = [
  {
    path: '',
    component: AvcCodeTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvcCodeTypePageRoutingModule {}
