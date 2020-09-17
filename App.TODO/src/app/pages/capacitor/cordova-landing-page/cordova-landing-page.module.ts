import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CordovaLandingPagePageRoutingModule } from './cordova-landing-page-routing.module';

import { CordovaLandingPagePage } from './cordova-landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CordovaLandingPagePageRoutingModule
  ],
  declarations: [CordovaLandingPagePage]
})
export class CordovaLandingPagePageModule {}
