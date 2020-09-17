import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitorSitePageRoutingModule } from './capacitor-site-routing.module';

import { CapacitorSitePage } from './capacitor-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitorSitePageRoutingModule
  ],
  declarations: [CapacitorSitePage]
})
export class CapacitorSitePageModule {}
