import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitorSiteHeaderPageRoutingModule } from './capacitor-site-header-routing.module';

import { CapacitorSiteHeaderPage } from './capacitor-site-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitorSiteHeaderPageRoutingModule
  ],
  declarations: [CapacitorSiteHeaderPage]
})
export class CapacitorSiteHeaderPageModule {}
