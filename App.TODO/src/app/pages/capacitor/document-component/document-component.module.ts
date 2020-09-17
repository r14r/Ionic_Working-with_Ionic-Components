import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentComponentPageRoutingModule } from './document-component-routing.module';

import { DocumentComponentPage } from './document-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentComponentPageRoutingModule
  ],
  declarations: [DocumentComponentPage]
})
export class DocumentComponentPageModule {}
