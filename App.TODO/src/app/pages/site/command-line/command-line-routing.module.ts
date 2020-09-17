import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandLinePage } from './command-line.page';

const routes: Routes = [
  {
    path: '',
    component: CommandLinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandLinePageRoutingModule {}
