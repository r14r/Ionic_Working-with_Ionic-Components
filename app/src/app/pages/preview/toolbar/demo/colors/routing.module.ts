import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarColorsPage2Page } from './page_2';
import { ToolbarColorsPage3Page } from './page_3';
import { ToolbarColorsPage4Page } from './page_4';
import { ToolbarColorsHomePage } from './page_home';

const routes: Routes = [
    {
        path: 'toolbar_colors_home',
        component: ToolbarColorsHomePage,
    },
    {
        path: 'toolbar_colors_page2',
        component: ToolbarColorsPage2Page,
    },
    {
        path: 'toolbar_colors_page3',
        component: ToolbarColorsPage3Page,
    },
    {
        path: 'toolbar_colors_page4',
        component: ToolbarColorsPage4Page,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ToolbarPageRoutingModule {}
