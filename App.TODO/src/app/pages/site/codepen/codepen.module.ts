import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodepenPageRoutingModule } from './codepen-routing.module';

import { CodepenPage } from './codepen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodepenPageRoutingModule
  ],
  declarations: [CodepenPage]
})
export class CodepenPageModule {}
