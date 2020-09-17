import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SteppedColorGeneratorPageRoutingModule } from './stepped-color-generator-routing.module';

import { SteppedColorGeneratorPage } from './stepped-color-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SteppedColorGeneratorPageRoutingModule
  ],
  declarations: [SteppedColorGeneratorPage]
})
export class SteppedColorGeneratorPageModule {}
