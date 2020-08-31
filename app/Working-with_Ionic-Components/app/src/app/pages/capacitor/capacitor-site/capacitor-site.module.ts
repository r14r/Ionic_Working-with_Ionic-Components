import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CapacitorSitePage } from './capacitor-site.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorSitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CapacitorSitePage]
})
export class CapacitorSitePageModule {}
