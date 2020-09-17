import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluginApiPageRoutingModule } from './plugin-api-routing.module';

import { PluginApiPage } from './plugin-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginApiPageRoutingModule
  ],
  declarations: [PluginApiPage]
})
export class PluginApiPageModule {}
