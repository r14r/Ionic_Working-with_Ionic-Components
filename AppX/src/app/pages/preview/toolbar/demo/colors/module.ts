import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarPageRoutingModule } from './routing.module';

import { ToolbarColorsHomePage } from './page_home';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ToolbarPageRoutingModule],
    declarations: [ToolbarColorsHomePage],
})
export class ToolbarColorsPageModule {}
