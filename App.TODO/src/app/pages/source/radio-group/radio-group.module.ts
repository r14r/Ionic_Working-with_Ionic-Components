import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioGroupPageRoutingModule } from './radio-group-routing.module';

import { RadioGroupPage } from './radio-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioGroupPageRoutingModule
  ],
  declarations: [RadioGroupPage]
})
export class RadioGroupPageModule {}
