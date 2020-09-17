import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarsPageRoutingModule } from './searchbars-routing.module';

import { SearchbarsPage } from './searchbars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarsPageRoutingModule
  ],
  declarations: [SearchbarsPage]
})
export class SearchbarsPageModule {}
