import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickerColumnPageRoutingModule } from './picker-column-routing.module';

import { PickerColumnPage } from './picker-column.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerColumnPageRoutingModule
  ],
  declarations: [PickerColumnPage]
})
export class PickerColumnPageModule {}
