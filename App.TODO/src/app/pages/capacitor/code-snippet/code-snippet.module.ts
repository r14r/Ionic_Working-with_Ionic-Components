import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeSnippetPageRoutingModule } from './code-snippet-routing.module';

import { CodeSnippetPage } from './code-snippet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeSnippetPageRoutingModule
  ],
  declarations: [CodeSnippetPage]
})
export class CodeSnippetPageModule {}
