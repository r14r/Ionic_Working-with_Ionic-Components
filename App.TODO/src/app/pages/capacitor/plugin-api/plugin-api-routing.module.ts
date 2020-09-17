import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PluginApiPage } from './plugin-api.page';

const routes: Routes = [
  {
    path: '',
    component: PluginApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluginApiPageRoutingModule {}
