import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolbarSearchbarPage } from './toolbar.page';

const routes: Routes = [{ path: '', component: ToolbarSearchbarPage }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [ToolbarSearchbarPage]
})
export class ToolbarSearchbarPageModule { }
