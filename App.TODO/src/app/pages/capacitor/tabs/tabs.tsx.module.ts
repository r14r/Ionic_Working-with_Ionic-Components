import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsTsxPageRoutingModule } from './tabs.tsx-routing.module';

import { TabsTsxPage } from './tabs.tsx.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tabs_TsxPageRoutingModule,
    ],
    declarations: [TabsTsxPage],
})
export class TabsTsxPageModule {}
