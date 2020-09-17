import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMarkedPageRoutingModule } from './app-marked-routing.module';

import { AppMarkedPage } from './app-marked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMarkedPageRoutingModule
  ],
  declarations: [AppMarkedPage]
})
export class AppMarkedPageModule {}
