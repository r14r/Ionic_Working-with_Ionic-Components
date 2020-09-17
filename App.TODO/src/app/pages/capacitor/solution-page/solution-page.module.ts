import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionPagePageRoutingModule } from './solution-page-routing.module';

import { SolutionPagePage } from './solution-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionPagePageRoutingModule
  ],
  declarations: [SolutionPagePage]
})
export class SolutionPagePageModule {}
