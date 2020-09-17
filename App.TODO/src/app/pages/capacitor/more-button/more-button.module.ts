import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreButtonPageRoutingModule } from './more-button-routing.module';

import { MoreButtonPage } from './more-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreButtonPageRoutingModule
  ],
  declarations: [MoreButtonPage]
})
export class MoreButtonPageModule {}
