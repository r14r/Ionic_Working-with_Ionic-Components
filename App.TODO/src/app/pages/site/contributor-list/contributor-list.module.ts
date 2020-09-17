import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributorListPageRoutingModule } from './contributor-list-routing.module';

import { ContributorListPage } from './contributor-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContributorListPageRoutingModule
  ],
  declarations: [ContributorListPage]
})
export class ContributorListPageModule {}
