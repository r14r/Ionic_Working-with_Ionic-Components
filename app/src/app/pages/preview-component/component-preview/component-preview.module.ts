import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPreviewPageRoutingModule } from './component-preview-routing.module';

import { ComponentPreviewPage } from './component-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPreviewPageRoutingModule
  ],
  declarations: [ComponentPreviewPage]
})
export class ComponentPreviewPageModule {}
