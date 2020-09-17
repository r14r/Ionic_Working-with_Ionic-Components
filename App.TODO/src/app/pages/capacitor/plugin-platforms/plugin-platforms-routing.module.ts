import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PluginPlatformsPage } from './plugin-platforms.page';

const routes: Routes = [
  {
    path: '',
    component: PluginPlatformsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluginPlatformsPageRoutingModule {}
