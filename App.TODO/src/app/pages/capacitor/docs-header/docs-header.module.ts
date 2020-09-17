import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsHeaderPageRoutingModule } from './docs-header-routing.module';

import { DocsHeaderPage } from './docs-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsHeaderPageRoutingModule
  ],
  declarations: [DocsHeaderPage]
})
export class DocsHeaderPageModule {}
