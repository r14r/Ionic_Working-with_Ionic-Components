import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowerContentNavPageRoutingModule } from './lower-content-nav-routing.module';

import { LowerContentNavPage } from './lower-content-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowerContentNavPageRoutingModule
  ],
  declarations: [LowerContentNavPage]
})
export class LowerContentNavPageModule {}
