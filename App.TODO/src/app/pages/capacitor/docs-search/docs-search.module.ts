import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsSearchPageRoutingModule } from './docs-search-routing.module';

import { DocsSearchPage } from './docs-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsSearchPageRoutingModule
  ],
  declarations: [DocsSearchPage]
})
export class DocsSearchPageModule {}
