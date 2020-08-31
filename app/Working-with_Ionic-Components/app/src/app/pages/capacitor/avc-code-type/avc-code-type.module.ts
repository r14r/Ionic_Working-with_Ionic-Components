import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvcCodeTypePage } from './avc-code-type.page';

const routes: Routes = [
  {
    path: '',
    component: AvcCodeTypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvcCodeTypePage]
})
export class AvcCodeTypePageModule {}
