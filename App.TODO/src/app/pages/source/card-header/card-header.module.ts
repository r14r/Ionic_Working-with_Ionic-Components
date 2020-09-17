import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardHeaderPageRoutingModule } from './card-header-routing.module';

import { CardHeaderPage } from './card-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardHeaderPageRoutingModule
  ],
  declarations: [CardHeaderPage]
})
export class CardHeaderPageModule {}
