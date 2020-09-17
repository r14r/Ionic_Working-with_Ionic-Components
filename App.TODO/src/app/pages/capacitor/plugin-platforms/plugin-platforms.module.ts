import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluginPlatformsPageRoutingModule } from './plugin-platforms-routing.module';

import { PluginPlatformsPage } from './plugin-platforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginPlatformsPageRoutingModule
  ],
  declarations: [PluginPlatformsPage]
})
export class PluginPlatformsPageModule {}
