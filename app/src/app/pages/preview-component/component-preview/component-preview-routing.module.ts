import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentPreviewPage } from './component-preview.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentPreviewPageRoutingModule {}
