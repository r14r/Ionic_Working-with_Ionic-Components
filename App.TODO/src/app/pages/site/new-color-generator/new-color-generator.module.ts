import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewColorGeneratorPageRoutingModule } from './new-color-generator-routing.module';

import { NewColorGeneratorPage } from './new-color-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewColorGeneratorPageRoutingModule
  ],
  declarations: [NewColorGeneratorPage]
})
export class NewColorGeneratorPageModule {}
