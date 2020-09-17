import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WistiaVideoPageRoutingModule } from './wistia-video-routing.module';

import { WistiaVideoPage } from './wistia-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WistiaVideoPageRoutingModule
  ],
  declarations: [WistiaVideoPage]
})
export class WistiaVideoPageModule {}
