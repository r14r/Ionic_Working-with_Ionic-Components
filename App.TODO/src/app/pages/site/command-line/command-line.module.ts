import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandLinePageRoutingModule } from './command-line-routing.module';

import { CommandLinePage } from './command-line.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandLinePageRoutingModule
  ],
  declarations: [CommandLinePage]
})
export class CommandLinePageModule {}
