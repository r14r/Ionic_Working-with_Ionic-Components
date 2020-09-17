import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorAccordionPageRoutingModule } from './color-accordion-routing.module';

import { ColorAccordionPage } from './color-accordion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorAccordionPageRoutingModule
  ],
  declarations: [ColorAccordionPage]
})
export class ColorAccordionPageModule {}
