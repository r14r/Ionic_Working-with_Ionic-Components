import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayeredColorsSelectPageRoutingModule } from './layered-colors-select-routing.module';

import { LayeredColorsSelectPage } from './layered-colors-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayeredColorsSelectPageRoutingModule
  ],
  declarations: [LayeredColorsSelectPage]
})
export class LayeredColorsSelectPageModule {}
