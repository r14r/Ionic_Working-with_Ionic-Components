import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderGroupPageRoutingModule } from './reorder-group-routing.module';

import { ReorderGroupPage } from './reorder-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderGroupPageRoutingModule
  ],
  declarations: [ReorderGroupPage]
})
export class ReorderGroupPageModule {}
