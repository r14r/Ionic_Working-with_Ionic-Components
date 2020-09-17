import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderMobileCollapsePageRoutingModule } from './header-mobile-collapse-routing.module';

import { HeaderMobileCollapsePage } from './header-mobile-collapse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderMobileCollapsePageRoutingModule
  ],
  declarations: [HeaderMobileCollapsePage]
})
export class HeaderMobileCollapsePageModule {}
