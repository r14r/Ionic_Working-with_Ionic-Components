import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsMenuPageRoutingModule } from './docs-menu-routing.module';

import { DocsMenuPage } from './docs-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsMenuPageRoutingModule
  ],
  declarations: [DocsMenuPage]
})
export class DocsMenuPageModule {}
