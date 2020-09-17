import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitorSiteFooterPageRoutingModule } from './capacitor-site-footer-routing.module';

import { CapacitorSiteFooterPage } from './capacitor-site-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitorSiteFooterPageRoutingModule
  ],
  declarations: [CapacitorSiteFooterPage]
})
export class CapacitorSiteFooterPageModule {}
