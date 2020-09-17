import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvcCodeTypePageRoutingModule } from './avc-code-type-routing.module';

import { AvcCodeTypePage } from './avc-code-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvcCodeTypePageRoutingModule
  ],
  declarations: [AvcCodeTypePage]
})
export class AvcCodeTypePageModule {}
