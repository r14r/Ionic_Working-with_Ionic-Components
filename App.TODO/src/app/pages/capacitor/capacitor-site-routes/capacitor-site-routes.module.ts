import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitorSiteRoutesPageRoutingModule } from './capacitor-site-routes-routing.module';

import { CapacitorSiteRoutesPage } from './capacitor-site-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitorSiteRoutesPageRoutingModule
  ],
  declarations: [CapacitorSiteRoutesPage]
})
export class CapacitorSiteRoutesPageModule {}
