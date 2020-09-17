import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocSnippetPageRoutingModule } from './doc-snippet-routing.module';

import { DocSnippetPage } from './doc-snippet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocSnippetPageRoutingModule
  ],
  declarations: [DocSnippetPage]
})
export class DocSnippetPageModule {}
