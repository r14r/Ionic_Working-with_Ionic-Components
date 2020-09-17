import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavLinkPageRoutingModule } from './nav-link-routing.module';

import { NavLinkPage } from './nav-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavLinkPageRoutingModule
  ],
  declarations: [NavLinkPage]
})
export class NavLinkPageModule {}
