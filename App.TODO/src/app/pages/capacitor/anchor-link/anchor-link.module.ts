import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnchorLinkPageRoutingModule } from './anchor-link-routing.module';

import { AnchorLinkPage } from './anchor-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnchorLinkPageRoutingModule
  ],
  declarations: [AnchorLinkPage]
})
export class AnchorLinkPageModule {}
