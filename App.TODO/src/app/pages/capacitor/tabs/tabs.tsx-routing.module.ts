import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsTsxPage } from './tabs.tsx.page';

const routes: Routes = [
    {
        path: '',
        component: TabsTsxPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsTsxPageRoutingModule {}
