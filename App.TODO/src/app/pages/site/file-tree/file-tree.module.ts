import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileTreePageRoutingModule } from './file-tree-routing.module';

import { FileTreePage } from './file-tree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileTreePageRoutingModule
  ],
  declarations: [FileTreePage]
})
export class FileTreePageModule {}
