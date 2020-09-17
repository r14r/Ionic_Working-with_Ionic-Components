import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageIndexPageRoutingModule } from './page-index-routing.module';

import { PageIndexPage } from './page-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageIndexPageRoutingModule
  ],
  declarations: [PageIndexPage]
})
export class PageIndexPageModule {}
