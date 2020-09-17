import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTogglePageRoutingModule } from './menu-toggle-routing.module';

import { MenuTogglePage } from './menu-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTogglePageRoutingModule
  ],
  declarations: [MenuTogglePage]
})
export class MenuTogglePageModule {}
