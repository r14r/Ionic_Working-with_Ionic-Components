import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeColorPageRoutingModule } from './code-color-routing.module';

import { CodeColorPage } from './code-color.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeColorPageRoutingModule
  ],
  declarations: [CodeColorPage]
})
export class CodeColorPageModule {}
