import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteBackdropPageRoutingModule } from './site-backdrop-routing.module';

import { SiteBackdropPage } from './site-backdrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteBackdropPageRoutingModule
  ],
  declarations: [SiteBackdropPage]
})
export class SiteBackdropPageModule {}
