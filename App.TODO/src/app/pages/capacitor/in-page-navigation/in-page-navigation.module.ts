import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InPageNavigationPageRoutingModule } from './in-page-navigation-routing.module';

import { InPageNavigationPage } from './in-page-navigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InPageNavigationPageRoutingModule
  ],
  declarations: [InPageNavigationPage]
})
export class InPageNavigationPageModule {}
