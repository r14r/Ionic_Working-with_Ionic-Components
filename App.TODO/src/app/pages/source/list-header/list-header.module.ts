import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHeaderPageRoutingModule } from './list-header-routing.module';

import { ListHeaderPage } from './list-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHeaderPageRoutingModule
  ],
  declarations: [ListHeaderPage]
})
export class ListHeaderPageModule {}
