import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolbarSegmentPage } from './toolbar.page';

const routes: Routes = [{ path: '', component: ToolbarSegmentPage }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [ToolbarSegmentPage]
})
export class ToolbarSegmentPageModule { }
