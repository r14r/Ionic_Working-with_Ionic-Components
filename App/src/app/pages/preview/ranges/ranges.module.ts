import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangesPageRoutingModule } from './ranges-routing.module';

import { RangesPage } from './ranges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangesPageRoutingModule
  ],
  declarations: [RangesPage]
})
export class RangesPageModule {}
