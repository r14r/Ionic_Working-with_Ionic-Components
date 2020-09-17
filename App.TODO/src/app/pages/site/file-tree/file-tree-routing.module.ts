import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileTreePage } from './file-tree.page';

const routes: Routes = [
  {
    path: '',
    component: FileTreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileTreePageRoutingModule {}
