import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FancyunderlineTsxPageRoutingModule } from './fancyunderline.tsx-routing.module';

import { FancyunderlineTsxPage } from './fancyunderline.tsx.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FancyunderlineTsxPageRoutingModule,
    ],
    declarations: [FancyunderlineTsxPage],
})
export class FancyunderlineTsxPageModule {}
