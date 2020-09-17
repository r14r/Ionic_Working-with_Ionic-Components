import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderMobileCollapsePage } from './header-mobile-collapse.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderMobileCollapsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderMobileCollapsePageRoutingModule {}
