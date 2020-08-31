import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnchorLinkPage } from './anchor-link.page';

const routes: Routes = [
  {
    path: '',
    component: AnchorLinkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnchorLinkPage]
})
export class AnchorLinkPageModule {}
