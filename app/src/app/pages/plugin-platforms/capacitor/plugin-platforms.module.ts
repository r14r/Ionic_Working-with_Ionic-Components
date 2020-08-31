import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PluginPlatformsPage } from './plugin-platforms.page';

const routes: Routes = [
  {
    path: '',
    component: PluginPlatformsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PluginPlatformsPage]
})
export class PluginPlatformsPageModule {}
