import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HubspotFormPageRoutingModule } from './hubspot-form-routing.module';

import { HubspotFormPage } from './hubspot-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HubspotFormPageRoutingModule
  ],
  declarations: [HubspotFormPage]
})
export class HubspotFormPageModule {}
