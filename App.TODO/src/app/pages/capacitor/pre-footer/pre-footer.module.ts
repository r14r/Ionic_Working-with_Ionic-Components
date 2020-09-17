import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreFooterPageRoutingModule } from './pre-footer-routing.module';

import { PreFooterPage } from './pre-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreFooterPageRoutingModule
  ],
  declarations: [PreFooterPage]
})
export class PreFooterPageModule {}
