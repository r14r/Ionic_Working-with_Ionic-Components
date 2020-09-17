import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFooterPageRoutingModule } from './page-footer-routing.module';

import { PageFooterPage } from './page-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFooterPageRoutingModule
  ],
  declarations: [PageFooterPage]
})
export class PageFooterPageModule {}
