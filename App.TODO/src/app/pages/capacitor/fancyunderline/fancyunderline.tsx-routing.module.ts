import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FancyunderlineTsxPage } from './fancyunderline.tsx.page';

const routes: Routes = [
    {
        path: '',
        component: FancyunderlineTsxPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FancyunderlineTsxPageRoutingModule {}
