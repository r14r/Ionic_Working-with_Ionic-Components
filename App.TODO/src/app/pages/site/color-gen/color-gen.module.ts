import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorGenPageRoutingModule } from './color-gen-routing.module';

import { ColorGenPage } from './color-gen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorGenPageRoutingModule
  ],
  declarations: [ColorGenPage]
})
export class ColorGenPageModule {}
