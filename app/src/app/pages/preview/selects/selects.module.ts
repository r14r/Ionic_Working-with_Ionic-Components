import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectsPageRoutingModule } from './selects-routing.module';

import { SelectsPage } from './selects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectsPageRoutingModule
  ],
  declarations: [SelectsPage]
})
export class SelectsPageModule {}
