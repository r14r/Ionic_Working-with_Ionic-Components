import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsMenuPage } from './docs-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DocsMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsMenuPageRoutingModule {}
