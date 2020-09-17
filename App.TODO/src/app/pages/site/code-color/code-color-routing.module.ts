import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeColorPage } from './code-color.page';

const routes: Routes = [
  {
    path: '',
    component: CodeColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeColorPageRoutingModule {}
