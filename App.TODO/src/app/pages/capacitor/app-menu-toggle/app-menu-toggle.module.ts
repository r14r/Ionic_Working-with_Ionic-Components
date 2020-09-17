import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMenuTogglePageRoutingModule } from './app-menu-toggle-routing.module';

import { AppMenuTogglePage } from './app-menu-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMenuTogglePageRoutingModule
  ],
  declarations: [AppMenuTogglePage]
})
export class AppMenuTogglePageModule {}
