import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeEntInstallPageRoutingModule } from './native-ent-install-routing.module';

import { NativeEntInstallPage } from './native-ent-install.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativeEntInstallPageRoutingModule
  ],
  declarations: [NativeEntInstallPage]
})
export class NativeEntInstallPageModule {}
