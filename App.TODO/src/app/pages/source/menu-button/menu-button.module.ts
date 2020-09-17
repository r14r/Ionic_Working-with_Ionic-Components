import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuButtonPageRoutingModule } from './menu-button-routing.module';

import { MenuButtonPage } from './menu-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuButtonPageRoutingModule
  ],
  declarations: [MenuButtonPage]
})
export class MenuButtonPageModule {}
