import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'button',
        loadChildren: () =>
            import('./pages/site/button/button.module').then(
                (m) => m.ButtonPageModule
            ),
    },
    {
        path: 'card',
        loadChildren: () =>
            import('./pages/site/card/card.module').then(
                (m) => m.CardPageModule
            ),
    },
    {
        path: 'cards',
        loadChildren: () =>
            import('./pages/site/cards/cards.module').then(
                (m) => m.CardsPageModule
            ),
    },
    {
        path: 'code',
        loadChildren: () =>
            import('./pages/site/code/code.module').then(
                (m) => m.CodePageModule
            ),
    },
    {
        path: 'code-color',
        loadChildren: () =>
            import('./pages/site/code-color/code-color.module').then(
                (m) => m.CodeColorPageModule
            ),
    },
    {
        path: 'codepen',
        loadChildren: () =>
            import('./pages/site/codepen/codepen.module').then(
                (m) => m.CodepenPageModule
            ),
    },
    {
        path: 'color-accordion',
        loadChildren: () =>
            import('./pages/site/color-accordion/color-accordion.module').then(
                (m) => m.ColorAccordionPageModule
            ),
    },
    {
        path: 'color-gen',
        loadChildren: () =>
            import('./pages/site/color-gen/color-gen.module').then(
                (m) => m.ColorGenPageModule
            ),
    },
    {
        path: 'command-line',
        loadChildren: () =>
            import('./pages/site/command-line/command-line.module').then(
                (m) => m.CommandLinePageModule
            ),
    },
    {
        path: 'contributor-list',
        loadChildren: () =>
            import(
                './pages/site/contributor-list/contributor-list.module'
            ).then((m) => m.ContributorListPageModule),
    },
    {
        path: 'demo',
        loadChildren: () =>
            import('./pages/site/demo/demo.module').then(
                (m) => m.DemoPageModule
            ),
    },
    {
        path: 'dropdown',
        loadChildren: () =>
            import('./pages/site/dropdown/dropdown.module').then(
                (m) => m.DropdownPageModule
            ),
    },
    {
        path: 'file-tree',
        loadChildren: () =>
            import('./pages/site/file-tree/file-tree.module').then(
                (m) => m.FileTreePageModule
            ),
    },
    {
        path: 'header',
        loadChildren: () =>
            import('./pages/site/header/header.module').then(
                (m) => m.HeaderPageModule
            ),
    },
    {
        path: 'header-mobile-collapse',
        loadChildren: () =>
            import(
                './pages/site/header-mobile-collapse/header-mobile-collapse.module'
            ).then((m) => m.HeaderMobileCollapsePageModule),
    },
    {
        path: 'hubspot-form',
        loadChildren: () =>
            import('./pages/site/hubspot-form/hubspot-form.module').then(
                (m) => m.HubspotFormPageModule
            ),
    },
    {
        path: 'item',
        loadChildren: () =>
            import('./pages/site/item/item.module').then(
                (m) => m.ItemPageModule
            ),
    },
    {
        path: 'item-list',
        loadChildren: () =>
            import('./pages/site/item-list/item-list.module').then(
                (m) => m.ItemListPageModule
            ),
    },
    {
        path: 'layered-colors-select',
        loadChildren: () =>
            import(
                './pages/site/layered-colors-select/layered-colors-select.module'
            ).then((m) => m.LayeredColorsSelectPageModule),
    },
    {
        path: 'menu',
        loadChildren: () =>
            import('./pages/site/menu/menu.module').then(
                (m) => m.MenuPageModule
            ),
    },
    {
        path: 'native-ent-install',
        loadChildren: () =>
            import(
                './pages/site/native-ent-install/native-ent-install.module'
            ).then((m) => m.NativeEntInstallPageModule),
    },
    {
        path: 'nav',
        loadChildren: () =>
            import('./pages/site/nav/nav.module').then((m) => m.NavPageModule),
    },
    {
        path: 'new-color-generator',
        loadChildren: () =>
            import(
                './pages/site/new-color-generator/new-color-generator.module'
            ).then((m) => m.NewColorGeneratorPageModule),
    },
    {
        path: 'page',
        loadChildren: () =>
            import('./pages/site/page/page.module').then(
                (m) => m.PagePageModule
            ),
    },
    {
        path: 'page-footer',
        loadChildren: () =>
            import('./pages/site/page-footer/page-footer.module').then(
                (m) => m.PageFooterPageModule
            ),
    },
    {
        path: 'pagination',
        loadChildren: () =>
            import('./pages/site/pagination/pagination.module').then(
                (m) => m.PaginationPageModule
            ),
    },
    {
        path: 'reference',
        loadChildren: () =>
            import('./pages/site/reference/reference.module').then(
                (m) => m.ReferencePageModule
            ),
    },
    {
        path: 'root',
        loadChildren: () =>
            import('./pages/site/root/root.module').then(
                (m) => m.RootPageModule
            ),
    },
    {
        path: 'search',
        loadChildren: () =>
            import('./pages/site/search/search.module').then(
                (m) => m.SearchPageModule
            ),
    },
    {
        path: 'select',
        loadChildren: () =>
            import('./pages/site/select/select.module').then(
                (m) => m.SelectPageModule
            ),
    },
    {
        path: 'stepped-color-generator',
        loadChildren: () =>
            import(
                './pages/site/stepped-color-generator/stepped-color-generator.module'
            ).then((m) => m.SteppedColorGeneratorPageModule),
    },
    {
        path: 'table-of-contents',
        loadChildren: () =>
            import(
                './pages/site/table-of-contents/table-of-contents.module'
            ).then((m) => m.TableOfContentsPageModule),
    },
    {
        path: 'tabs',
        loadChildren: () =>
            import('./pages/site/tabs/tabs.module').then(
                (m) => m.TabsPageModule
            ),
    },
    {
        path: 'wistia-video',
        loadChildren: () =>
            import('./pages/site/wistia-video/wistia-video.module').then(
                (m) => m.WistiaVideoPageModule
            ),
    },
    {
        path: 'action-sheet',
        loadChildren: () =>
            import('./pages/site-api/action-sheet/action-sheet.module').then(
                (m) => m.ActionSheetPageModule
            ),
    },
    {
        path: 'alert',
        loadChildren: () =>
            import('./pages/site-api/alert/alert.module').then(
                (m) => m.AlertPageModule
            ),
    },
    {
        path: 'avatar',
        loadChildren: () =>
            import('./pages/site-api/avatar/avatar.module').then(
                (m) => m.AvatarPageModule
            ),
    },
    {
        path: 'back-button',
        loadChildren: () =>
            import('./pages/site-api/back-button/back-button.module').then(
                (m) => m.BackButtonPageModule
            ),
    },
    {
        path: 'backdrop',
        loadChildren: () =>
            import('./pages/site-api/backdrop/backdrop.module').then(
                (m) => m.BackdropPageModule
            ),
    },
    {
        path: 'badge',
        loadChildren: () =>
            import('./pages/site-api/badge/badge.module').then(
                (m) => m.BadgePageModule
            ),
    },
    {
        path: 'button',
        loadChildren: () =>
            import('./pages/site-api/button/button.module').then(
                (m) => m.ButtonPageModule
            ),
    },
    {
        path: 'card',
        loadChildren: () =>
            import('./pages/site-api/card/card.module').then(
                (m) => m.CardPageModule
            ),
    },
    {
        path: 'checkbox',
        loadChildren: () =>
            import('./pages/site-api/checkbox/checkbox.module').then(
                (m) => m.CheckboxPageModule
            ),
    },
    {
        path: 'chip',
        loadChildren: () =>
            import('./pages/site-api/chip/chip.module').then(
                (m) => m.ChipPageModule
            ),
    },
    {
        path: 'content',
        loadChildren: () =>
            import('./pages/site-api/content/content.module').then(
                (m) => m.ContentPageModule
            ),
    },
    {
        path: 'datetime',
        loadChildren: () =>
            import('./pages/site-api/datetime/datetime.module').then(
                (m) => m.DatetimePageModule
            ),
    },
    {
        path: 'fab',
        loadChildren: () =>
            import('./pages/site-api/fab/fab.module').then(
                (m) => m.FabPageModule
            ),
    },
    {
        path: 'grid',
        loadChildren: () =>
            import('./pages/site-api/grid/grid.module').then(
                (m) => m.GridPageModule
            ),
    },
    {
        path: 'icon',
        loadChildren: () =>
            import('./pages/site-api/icon/icon.module').then(
                (m) => m.IconPageModule
            ),
    },
    {
        path: 'infinite-scroll',
        loadChildren: () =>
            import(
                './pages/site-api/infinite-scroll/infinite-scroll.module'
            ).then((m) => m.InfiniteScrollPageModule),
    },
    {
        path: 'input',
        loadChildren: () =>
            import('./pages/site-api/input/input.module').then(
                (m) => m.InputPageModule
            ),
    },
    {
        path: 'item',
        loadChildren: () =>
            import('./pages/site-api/item/item.module').then(
                (m) => m.ItemPageModule
            ),
    },
    {
        path: 'list',
        loadChildren: () =>
            import('./pages/site-api/list/list.module').then(
                (m) => m.ListPageModule
            ),
    },
    {
        path: 'loading',
        loadChildren: () =>
            import('./pages/site-api/loading/loading.module').then(
                (m) => m.LoadingPageModule
            ),
    },
    {
        path: 'menu',
        loadChildren: () =>
            import('./pages/site-api/menu/menu.module').then(
                (m) => m.MenuPageModule
            ),
    },
    {
        path: 'modal',
        loadChildren: () =>
            import('./pages/site-api/modal/modal.module').then(
                (m) => m.ModalPageModule
            ),
    },
    {
        path: 'nav',
        loadChildren: () =>
            import('./pages/site-api/nav/nav.module').then(
                (m) => m.NavPageModule
            ),
    },
    {
        path: 'note',
        loadChildren: () =>
            import('./pages/site-api/note/note.module').then(
                (m) => m.NotePageModule
            ),
    },
    {
        path: 'picker',
        loadChildren: () =>
            import('./pages/site-api/picker/picker.module').then(
                (m) => m.PickerPageModule
            ),
    },
    {
        path: 'popover',
        loadChildren: () =>
            import('./pages/site-api/popover/popover.module').then(
                (m) => m.PopoverPageModule
            ),
    },
    {
        path: 'progress-bar',
        loadChildren: () =>
            import('./pages/site-api/progress-bar/progress-bar.module').then(
                (m) => m.ProgressBarPageModule
            ),
    },
    {
        path: 'radio',
        loadChildren: () =>
            import('./pages/site-api/radio/radio.module').then(
                (m) => m.RadioPageModule
            ),
    },
    {
        path: 'range',
        loadChildren: () =>
            import('./pages/site-api/range/range.module').then(
                (m) => m.RangePageModule
            ),
    },
    {
        path: 'refresher',
        loadChildren: () =>
            import('./pages/site-api/refresher/refresher.module').then(
                (m) => m.RefresherPageModule
            ),
    },
    {
        path: 'reorder',
        loadChildren: () =>
            import('./pages/site-api/reorder/reorder.module').then(
                (m) => m.ReorderPageModule
            ),
    },
    {
        path: 'router-link',
        loadChildren: () =>
            import('./pages/site-api/router-link/router-link.module').then(
                (m) => m.RouterLinkPageModule
            ),
    },
    {
        path: 'searchbar',
        loadChildren: () =>
            import('./pages/site-api/searchbar/searchbar.module').then(
                (m) => m.SearchbarPageModule
            ),
    },
    {
        path: 'segment',
        loadChildren: () =>
            import('./pages/site-api/segment/segment.module').then(
                (m) => m.SegmentPageModule
            ),
    },
    {
        path: 'select',
        loadChildren: () =>
            import('./pages/site-api/select/select.module').then(
                (m) => m.SelectPageModule
            ),
    },
    {
        path: 'skeleton-text',
        loadChildren: () =>
            import('./pages/site-api/skeleton-text/skeleton-text.module').then(
                (m) => m.SkeletonTextPageModule
            ),
    },
    {
        path: 'slides',
        loadChildren: () =>
            import('./pages/site-api/slides/slides.module').then(
                (m) => m.SlidesPageModule
            ),
    },
    {
        path: 'spinner',
        loadChildren: () =>
            import('./pages/site-api/spinner/spinner.module').then(
                (m) => m.SpinnerPageModule
            ),
    },
    {
        path: 'tabs',
        loadChildren: () =>
            import('./pages/site-api/tabs/tabs.module').then(
                (m) => m.TabsPageModule
            ),
    },
    {
        path: 'text',
        loadChildren: () =>
            import('./pages/site-api/text/text.module').then(
                (m) => m.TextPageModule
            ),
    },
    {
        path: 'thumbnail',
        loadChildren: () =>
            import('./pages/site-api/thumbnail/thumbnail.module').then(
                (m) => m.ThumbnailPageModule
            ),
    },
    {
        path: 'toast',
        loadChildren: () =>
            import('./pages/site-api/toast/toast.module').then(
                (m) => m.ToastPageModule
            ),
    },
    {
        path: 'toggle',
        loadChildren: () =>
            import('./pages/site-api/toggle/toggle.module').then(
                (m) => m.TogglePageModule
            ),
    },
    {
        path: 'toolbar',
        loadChildren: () =>
            import('./pages/site-api/toolbar/toolbar.module').then(
                (m) => m.ToolbarPageModule
            ),
    },
    /*
    {
        path: 'action-sheet',
        loadChildren: () =>
            import('./pages/source/action-sheet/action-sheet.module').then(
                (m) => m.ActionSheetPageModule
            ),
    },
    {
        path: 'alert',
        loadChildren: () =>
            import('./pages/source/alert/alert.module').then(
                (m) => m.AlertPageModule
            ),
    },
    {
        path: 'app',
        loadChildren: () =>
            import('./pages/source/app/app.module').then(
                (m) => m.AppPageModule
            ),
    },
    {
        path: 'avatar',
        loadChildren: () =>
            import('./pages/source/avatar/avatar.module').then(
                (m) => m.AvatarPageModule
            ),
    },
    {
        path: 'back-button',
        loadChildren: () =>
            import('./pages/source/back-button/back-button.module').then(
                (m) => m.BackButtonPageModule
            ),
    },
    {
        path: 'badge',
        loadChildren: () =>
            import('./pages/source/badge/badge.module').then(
                (m) => m.BadgePageModule
            ),
    },
    {
        path: 'button',
        loadChildren: () =>
            import('./pages/source/button/button.module').then(
                (m) => m.ButtonPageModule
            ),
    },
    {
        path: 'buttons',
        loadChildren: () =>
            import('./pages/source/buttons/buttons.module').then(
                (m) => m.ButtonsPageModule
            ),
    },
    {
        path: 'card-header',
        loadChildren: () =>
            import('./pages/source/card-header/card-header.module').then(
                (m) => m.CardHeaderPageModule
            ),
    },
    {
        path: 'card',
        loadChildren: () =>
            import('./pages/source/card/card.module').then(
                (m) => m.CardPageModule
            ),
    },
    {
        path: 'checkbox',
        loadChildren: () =>
            import('./pages/source/checkbox/checkbox.module').then(
                (m) => m.CheckboxPageModule
            ),
    },
    {
        path: 'chip',
        loadChildren: () =>
            import('./pages/source/chip/chip.module').then(
                (m) => m.ChipPageModule
            ),
    },
    {
        path: 'content',
        loadChildren: () =>
            import('./pages/source/content/content.module').then(
                (m) => m.ContentPageModule
            ),
    },
    {
        path: 'datetime',
        loadChildren: () =>
            import('./pages/source/datetime/datetime.module').then(
                (m) => m.DatetimePageModule
            ),
    },
    {
        path: 'fab-button',
        loadChildren: () =>
            import('./pages/source/fab-button/fab-button.module').then(
                (m) => m.FabButtonPageModule
            ),
    },
    {
        path: 'fab',
        loadChildren: () =>
            import('./pages/source/fab/fab.module').then(
                (m) => m.FabPageModule
            ),
    },
    {
        path: 'footer',
        loadChildren: () =>
            import('./pages/source/footer/footer.module').then(
                (m) => m.FooterPageModule
            ),
    },
    {
        path: 'grid',
        loadChildren: () =>
            import('./pages/source/grid/grid.module').then(
                (m) => m.GridPageModule
            ),
    },
    {
        path: 'header',
        loadChildren: () =>
            import('./pages/source/header/header.module').then(
                (m) => m.HeaderPageModule
            ),
    },
    {
        path: 'icon',
        loadChildren: () =>
            import('./pages/source/icon/icon.module').then(
                (m) => m.IconPageModule
            ),
    },
    {
        path: 'img',
        loadChildren: () =>
            import('./pages/source/img/img.module').then(
                (m) => m.ImgPageModule
            ),
    },
    {
        path: 'infinite-scroll',
        loadChildren: () =>
            import(
                './pages/source/infinite-scroll/infinite-scroll.module'
            ).then((m) => m.InfiniteScrollPageModule),
    },
    {
        path: 'input',
        loadChildren: () =>
            import('./pages/source/input/input.module').then(
                (m) => m.InputPageModule
            ),
    },
    {
        path: 'item-divider',
        loadChildren: () =>
            import('./pages/source/item-divider/item-divider.module').then(
                (m) => m.ItemDividerPageModule
            ),
    },
    {
        path: 'item-sliding',
        loadChildren: () =>
            import('./pages/source/item-sliding/item-sliding.module').then(
                (m) => m.ItemSlidingPageModule
            ),
    },
    {
        path: 'item',
        loadChildren: () =>
            import('./pages/source/item/item.module').then(
                (m) => m.ItemPageModule
            ),
    },
    {
        path: 'label',
        loadChildren: () =>
            import('./pages/source/label/label.module').then(
                (m) => m.LabelPageModule
            ),
    },
    {
        path: 'list-header',
        loadChildren: () =>
            import('./pages/source/list-header/list-header.module').then(
                (m) => m.ListHeaderPageModule
            ),
    },
    {
        path: 'list',
        loadChildren: () =>
            import('./pages/source/list/list.module').then(
                (m) => m.ListPageModule
            ),
    },
    {
        path: 'loading',
        loadChildren: () =>
            import('./pages/source/loading/loading.module').then(
                (m) => m.LoadingPageModule
            ),
    },
    {
        path: 'menu-button',
        loadChildren: () =>
            import('./pages/source/menu-button/menu-button.module').then(
                (m) => m.MenuButtonPageModule
            ),
    },
    {
        path: 'menu-toggle',
        loadChildren: () =>
            import('./pages/source/menu-toggle/menu-toggle.module').then(
                (m) => m.MenuTogglePageModule
            ),
    },
    {
        path: 'menu',
        loadChildren: () =>
            import('./pages/source/menu/menu.module').then(
                (m) => m.MenuPageModule
            ),
    },
    {
        path: 'modal',
        loadChildren: () =>
            import('./pages/source/modal/modal.module').then(
                (m) => m.ModalPageModule
            ),
    },
    {
        path: 'nav-link',
        loadChildren: () =>
            import('./pages/source/nav-link/nav-link.module').then(
                (m) => m.NavLinkPageModule
            ),
    },
    {
        path: 'nav',
        loadChildren: () =>
            import('./pages/source/nav/nav.module').then(
                (m) => m.NavPageModule
            ),
    },
    {
        path: 'note',
        loadChildren: () =>
            import('./pages/source/note/note.module').then(
                (m) => m.NotePageModule
            ),
    },
    {
        path: 'picker-column',
        loadChildren: () =>
            import('./pages/source/picker-column/picker-column.module').then(
                (m) => m.PickerColumnPageModule
            ),
    },
    {
        path: 'picker',
        loadChildren: () =>
            import('./pages/source/picker/picker.module').then(
                (m) => m.PickerPageModule
            ),
    },
    {
        path: 'popover',
        loadChildren: () =>
            import('./pages/source/popover/popover.module').then(
                (m) => m.PopoverPageModule
            ),
    },
    {
        path: 'progress-bar',
        loadChildren: () =>
            import('./pages/source/progress-bar/progress-bar.module').then(
                (m) => m.ProgressBarPageModule
            ),
    },
    {
        path: 'radio-group',
        loadChildren: () =>
            import('./pages/source/radio-group/radio-group.module').then(
                (m) => m.RadioGroupPageModule
            ),
    },
    {
        path: 'radio',
        loadChildren: () =>
            import('./pages/source/radio/radio.module').then(
                (m) => m.RadioPageModule
            ),
    },
    {
        path: 'range',
        loadChildren: () =>
            import('./pages/source/range/range.module').then(
                (m) => m.RangePageModule
            ),
    },
    {
        path: 'refresher',
        loadChildren: () =>
            import('./pages/source/refresher/refresher.module').then(
                (m) => m.RefresherPageModule
            ),
    },
    {
        path: 'reorder-group',
        loadChildren: () =>
            import('./pages/source/reorder-group/reorder-group.module').then(
                (m) => m.ReorderGroupPageModule
            ),
    },
    {
        path: 'ripple-effect',
        loadChildren: () =>
            import('./pages/source/ripple-effect/ripple-effect.module').then(
                (m) => m.RippleEffectPageModule
            ),
    },
    {
        path: 'router-link',
        loadChildren: () =>
            import('./pages/source/router-link/router-link.module').then(
                (m) => m.RouterLinkPageModule
            ),
    },
    {
        path: 'router-outlet',
        loadChildren: () =>
            import('./pages/source/router-outlet/router-outlet.module').then(
                (m) => m.RouterOutletPageModule
            ),
    },
    {
        path: 'router',
        loadChildren: () =>
            import('./pages/source/router/router.module').then(
                (m) => m.RouterPageModule
            ),
    },
    {
        path: 'searchbar',
        loadChildren: () =>
            import('./pages/source/searchbar/searchbar.module').then(
                (m) => m.SearchbarPageModule
            ),
    },
    {
        path: 'segment',
        loadChildren: () =>
            import('./pages/source/segment/segment.module').then(
                (m) => m.SegmentPageModule
            ),
    },
    {
        path: 'select',
        loadChildren: () =>
            import('./pages/source/select/select.module').then(
                (m) => m.SelectPageModule
            ),
    },
    {
        path: 'skeleton-text',
        loadChildren: () =>
            import('./pages/source/skeleton-text/skeleton-text.module').then(
                (m) => m.SkeletonTextPageModule
            ),
    },
    {
        path: 'slides',
        loadChildren: () =>
            import('./pages/source/slides/slides.module').then(
                (m) => m.SlidesPageModule
            ),
    },
    {
        path: 'spinner',
        loadChildren: () =>
            import('./pages/source/spinner/spinner.module').then(
                (m) => m.SpinnerPageModule
            ),
    },
    {
        path: 'split-pane',
        loadChildren: () =>
            import('./pages/source/split-pane/split-pane.module').then(
                (m) => m.SplitPanePageModule
            ),
    },
    {
        path: 'tab-bar',
        loadChildren: () =>
            import('./pages/source/tab-bar/tab-bar.module').then(
                (m) => m.TabBarPageModule
            ),
    },
    {
        path: 'tabs',
        loadChildren: () =>
            import('./pages/source/tabs/tabs.module').then(
                (m) => m.TabsPageModule
            ),
    },
    {
        path: 'text',
        loadChildren: () =>
            import('./pages/source/text/text.module').then(
                (m) => m.TextPageModule
            ),
    },
    {
        path: 'textarea',
        loadChildren: () =>
            import('./pages/source/textarea/textarea.module').then(
                (m) => m.TextareaPageModule
            ),
    },
    {
        path: 'thumbnail',
        loadChildren: () =>
            import('./pages/source/thumbnail/thumbnail.module').then(
                (m) => m.ThumbnailPageModule
            ),
    },
    {
        path: 'title',
        loadChildren: () =>
            import('./pages/source/title/title.module').then(
                (m) => m.TitlePageModule
            ),
    },
    {
        path: 'toast',
        loadChildren: () =>
            import('./pages/source/toast/toast.module').then(
                (m) => m.ToastPageModule
            ),
    },
    {
        path: 'toggle',
        loadChildren: () =>
            import('./pages/source/toggle/toggle.module').then(
                (m) => m.TogglePageModule
            ),
    },
    {
        path: 'toolbar',
        loadChildren: () =>
            import('./pages/source/toolbar/toolbar.module').then(
                (m) => m.ToolbarPageModule
            ),
    },
    {
        path: 'virtual-scroll',
        loadChildren: () =>
            import('./pages/source/virtual-scroll/virtual-scroll.module').then(
                (m) => m.VirtualScrollPageModule
            ),
	},
	*/
    {
        path: 'action-sheets',
        loadChildren: () =>
            import('./pages/preview/action-sheets/action-sheets.module').then(
                (m) => m.ActionSheetsPageModule
            ),
    },
    {
        path: 'alerts',
        loadChildren: () =>
            import('./pages/preview/alerts/alerts.module').then(
                (m) => m.AlertsPageModule
            ),
    },
    {
        path: 'badges',
        loadChildren: () =>
            import('./pages/preview/badges/badges.module').then(
                (m) => m.BadgesPageModule
            ),
    },
    {
        path: 'buttons',
        loadChildren: () =>
            import('./pages/preview/buttons/buttons.module').then(
                (m) => m.ButtonsPageModule
            ),
    },
    {
        path: 'cards',
        loadChildren: () =>
            import('./pages/preview/cards/cards.module').then(
                (m) => m.CardsPageModule
            ),
    },
    {
        path: 'checkboxes',
        loadChildren: () =>
            import('./pages/preview/checkboxes/checkboxes.module').then(
                (m) => m.CheckboxesPageModule
            ),
    },
    {
        path: 'datetime',
        loadChildren: () =>
            import('./pages/preview/datetime/datetime.module').then(
                (m) => m.DatetimePageModule
            ),
    },
    {
        path: 'fabs',
        loadChildren: () =>
            import('./pages/preview/fabs/fabs.module').then(
                (m) => m.FabsPageModule
            ),
    },
    {
        path: 'gestures',
        loadChildren: () =>
            import('./pages/preview/gestures/gestures.module').then(
                (m) => m.GesturesPageModule
            ),
    },
    {
        path: 'grid',
        loadChildren: () =>
            import('./pages/preview/grid/grid.module').then(
                (m) => m.GridPageModule
            ),
    },
    {
        path: 'icons',
        loadChildren: () =>
            import('./pages/preview/icons/icons.module').then(
                (m) => m.IconsPageModule
            ),
    },
    {
        path: 'inputs',
        loadChildren: () =>
            import('./pages/preview/inputs/inputs.module').then(
                (m) => m.InputsPageModule
            ),
    },
    {
        path: 'lists',
        loadChildren: () =>
            import('./pages/preview/lists/lists.module').then(
                (m) => m.ListsPageModule
            ),
    },
    {
        path: 'loading',
        loadChildren: () =>
            import('./pages/preview/loading/loading.module').then(
                (m) => m.LoadingPageModule
            ),
    },
    {
        path: 'menus',
        loadChildren: () =>
            import('./pages/preview/menus/menus.module').then(
                (m) => m.MenusPageModule
            ),
    },
    {
        path: 'modals',
        loadChildren: () =>
            import('./pages/preview/modals/modals.module').then(
                (m) => m.ModalsPageModule
            ),
    },
    {
        path: 'navigation',
        loadChildren: () =>
            import('./pages/preview/navigation/navigation.module').then(
                (m) => m.NavigationPageModule
            ),
    },
    {
        path: 'popovers',
        loadChildren: () =>
            import('./pages/preview/popovers/popovers.module').then(
                (m) => m.PopoversPageModule
            ),
    },
    {
        path: 'radios',
        loadChildren: () =>
            import('./pages/preview/radios/radios.module').then(
                (m) => m.RadiosPageModule
            ),
    },
    {
        path: 'ranges',
        loadChildren: () =>
            import('./pages/preview/ranges/ranges.module').then(
                (m) => m.RangesPageModule
            ),
    },
    {
        path: 'searchbars',
        loadChildren: () =>
            import('./pages/preview/searchbars/searchbars.module').then(
                (m) => m.SearchbarsPageModule
            ),
    },
    {
        path: 'segments',
        loadChildren: () =>
            import('./pages/preview/segments/segments.module').then(
                (m) => m.SegmentsPageModule
            ),
    },
    {
        path: 'selects',
        loadChildren: () =>
            import('./pages/preview/selects/selects.module').then(
                (m) => m.SelectsPageModule
            ),
    },
    {
        path: 'slides',
        loadChildren: () =>
            import('./pages/preview/slides/slides.module').then(
                (m) => m.SlidesPageModule
            ),
    },
    {
        path: 'tabs',
        loadChildren: () =>
            import('./pages/preview/tabs/tabs.module').then(
                (m) => m.TabsPageModule
            ),
    },
    {
        path: 'toast',
        loadChildren: () =>
            import('./pages/preview/toast/toast.module').then(
                (m) => m.ToastPageModule
            ),
    },
    {
        path: 'toggles',
        loadChildren: () =>
            import('./pages/preview/toggles/toggles.module').then(
                (m) => m.TogglesPageModule
            ),
    },
    {
        path: 'toolbar',
        loadChildren: () =>
            import('./pages/preview/toolbar/toolbar.module').then(
                (m) => m.ToolbarPageModule
            ),
    },
    {
        path: 'action-sheet',
        loadChildren: () =>
            import(
                './pages/preview-component/action-sheet/action-sheet.module'
            ).then((m) => m.ActionSheetPageModule),
    },
    {
        path: 'alert',
        loadChildren: () =>
            import('./pages/preview-component/alert/alert.module').then(
                (m) => m.AlertPageModule
            ),
    },
    {
        path: 'badge',
        loadChildren: () =>
            import('./pages/preview-component/badge/badge.module').then(
                (m) => m.BadgePageModule
            ),
    },
    {
        path: 'button',
        loadChildren: () =>
            import('./pages/preview-component/button/button.module').then(
                (m) => m.ButtonPageModule
            ),
    },
    {
        path: 'card',
        loadChildren: () =>
            import('./pages/preview-component/card/card.module').then(
                (m) => m.CardPageModule
            ),
    },
    {
        path: 'checkbox',
        loadChildren: () =>
            import('./pages/preview-component/checkbox/checkbox.module').then(
                (m) => m.CheckboxPageModule
            ),
    },
    {
        path: 'component-preview',
        loadChildren: () =>
            import(
                './pages/preview-component/component-preview/component-preview.module'
            ).then((m) => m.ComponentPreviewPageModule),
    },
    {
        path: 'datetime',
        loadChildren: () =>
            import('./pages/preview-component/datetime/datetime.module').then(
                (m) => m.DatetimePageModule
            ),
    },
    {
        path: 'fab',
        loadChildren: () =>
            import('./pages/preview-component/fab/fab.module').then(
                (m) => m.FabPageModule
            ),
    },
    {
        path: 'grid',
        loadChildren: () =>
            import('./pages/preview-component/grid/grid.module').then(
                (m) => m.GridPageModule
            ),
    },
    {
        path: 'infinite-scroll',
        loadChildren: () =>
            import(
                './pages/preview-component/infinite-scroll/infinite-scroll.module'
            ).then((m) => m.InfiniteScrollPageModule),
    },
    {
        path: 'input',
        loadChildren: () =>
            import('./pages/preview-component/input/input.module').then(
                (m) => m.InputPageModule
            ),
    },
    {
        path: 'list',
        loadChildren: () =>
            import('./pages/preview-component/list/list.module').then(
                (m) => m.ListPageModule
            ),
    },
    {
        path: 'loading',
        loadChildren: () =>
            import('./pages/preview-component/loading/loading.module').then(
                (m) => m.LoadingPageModule
            ),
    },
    {
        path: 'menu',
        loadChildren: () =>
            import('./pages/preview-component/menu/menu.module').then(
                (m) => m.MenuPageModule
            ),
    },
    {
        path: 'modal',
        loadChildren: () =>
            import('./pages/preview-component/modal/modal.module').then(
                (m) => m.ModalPageModule
            ),
    },
    {
        path: 'nav',
        loadChildren: () =>
            import('./pages/preview-component/nav/nav.module').then(
                (m) => m.NavPageModule
            ),
    },
    {
        path: 'page-index',
        loadChildren: () =>
            import(
                './pages/preview-component/page-index/page-index.module'
            ).then((m) => m.PageIndexPageModule),
    },
    {
        path: 'popover',
        loadChildren: () =>
            import('./pages/preview-component/popover/popover.module').then(
                (m) => m.PopoverPageModule
            ),
    },
    {
        path: 'range',
        loadChildren: () =>
            import('./pages/preview-component/range/range.module').then(
                (m) => m.RangePageModule
            ),
    },
    {
        path: 'refresher',
        loadChildren: () =>
            import('./pages/preview-component/refresher/refresher.module').then(
                (m) => m.RefresherPageModule
            ),
    },
    {
        path: 'searchbar',
        loadChildren: () =>
            import('./pages/preview-component/searchbar/searchbar.module').then(
                (m) => m.SearchbarPageModule
            ),
    },
    {
        path: 'select',
        loadChildren: () =>
            import('./pages/preview-component/select/select.module').then(
                (m) => m.SelectPageModule
            ),
    },
    {
        path: 'slides',
        loadChildren: () =>
            import('./pages/preview-component/slides/slides.module').then(
                (m) => m.SlidesPageModule
            ),
    },
    {
        path: 'spinner',
        loadChildren: () =>
            import('./pages/preview-component/spinner/spinner.module').then(
                (m) => m.SpinnerPageModule
            ),
    },
    {
        path: 'tabs',
        loadChildren: () =>
            import('./pages/preview-component/tabs/tabs.module').then(
                (m) => m.TabsPageModule
            ),
    },
    {
        path: 'toast',
        loadChildren: () =>
            import('./pages/preview-component/toast/toast.module').then(
                (m) => m.ToastPageModule
            ),
    },
    {
        path: 'virtual-scroll',
        loadChildren: () =>
            import(
                './pages/preview-component/virtual-scroll/virtual-scroll.module'
            ).then((m) => m.VirtualScrollPageModule),
    },
    /*
	{
        path: 'fancyunderline.tsx',
        loadChildren: () =>
            import(
                './pages/capacitor/fancyunderline/fancyunderline.tsx.module'
            ).then((m) => m.Fancyunderline.TsxPageModule),
    },
    {
        path: 'anchor-link',
        loadChildren: () =>
            import('./pages/capacitor/anchor-link/anchor-link.module').then(
                (m) => m.AnchorLinkPageModule
            ),
    },
    {
        path: 'app-marked',
        loadChildren: () =>
            import('./pages/capacitor/app-marked/app-marked.module').then(
                (m) => m.AppMarkedPageModule
            ),
    },
    {
        path: 'app-menu-toggle',
        loadChildren: () =>
            import(
                './pages/capacitor/app-menu-toggle/app-menu-toggle.module'
            ).then((m) => m.AppMenuTogglePageModule),
    },
    {
        path: 'avc-code-type',
        loadChildren: () =>
            import('./pages/capacitor/avc-code-type/avc-code-type.module').then(
                (m) => m.AvcCodeTypePageModule
            ),
    },
    {
        path: 'blog',
        loadChildren: () =>
            import('./pages/capacitor/blog/blog.module').then(
                (m) => m.BlogPageModule
            ),
    },
    {
        path: 'capacitor-site',
        loadChildren: () =>
            import(
                './pages/capacitor/capacitor-site/capacitor-site.module'
            ).then((m) => m.CapacitorSitePageModule),
    },
    {
        path: 'capacitor-site-footer',
        loadChildren: () =>
            import(
                './pages/capacitor/capacitor-site-footer/capacitor-site-footer.module'
            ).then((m) => m.CapacitorSiteFooterPageModule),
    },
    {
        path: 'capacitor-site-header',
        loadChildren: () =>
            import(
                './pages/capacitor/capacitor-site-header/capacitor-site-header.module'
            ).then((m) => m.CapacitorSiteHeaderPageModule),
    },
    {
        path: 'capacitor-site-routes',
        loadChildren: () =>
            import(
                './pages/capacitor/capacitor-site-routes/capacitor-site-routes.module'
            ).then((m) => m.CapacitorSiteRoutesPageModule),
    },
    {
        path: 'code-snippet',
        loadChildren: () =>
            import('./pages/capacitor/code-snippet/code-snippet.module').then(
                (m) => m.CodeSnippetPageModule
            ),
    },
    {
        path: 'community',
        loadChildren: () =>
            import('./pages/capacitor/community/community.module').then(
                (m) => m.CommunityPageModule
            ),
    },
    {
        path: 'contributor-list',
        loadChildren: () =>
            import(
                './pages/capacitor/contributor-list/contributor-list.module'
            ).then((m) => m.ContributorListPageModule),
    },
    {
        path: 'cordova-landing-page',
        loadChildren: () =>
            import(
                './pages/capacitor/cordova-landing-page/cordova-landing-page.module'
            ).then((m) => m.CordovaLandingPagePageModule),
    },
    {
        path: 'doc-snippet',
        loadChildren: () =>
            import('./pages/capacitor/doc-snippet/doc-snippet.module').then(
                (m) => m.DocSnippetPageModule
            ),
    },
    {
        path: 'docs-header',
        loadChildren: () =>
            import('./pages/capacitor/docs-header/docs-header.module').then(
                (m) => m.DocsHeaderPageModule
            ),
    },
    {
        path: 'docs-menu',
        loadChildren: () =>
            import('./pages/capacitor/docs-menu/docs-menu.module').then(
                (m) => m.DocsMenuPageModule
            ),
    },
    {
        path: 'docs-search',
        loadChildren: () =>
            import('./pages/capacitor/docs-search/docs-search.module').then(
                (m) => m.DocsSearchPageModule
            ),
    },
    {
        path: 'document-component',
        loadChildren: () =>
            import(
                './pages/capacitor/document-component/document-component.module'
            ).then((m) => m.DocumentComponentPageModule),
    },
    {
        path: 'enterprise',
        loadChildren: () =>
            import('./pages/capacitor/enterprise/enterprise.module').then(
                (m) => m.EnterprisePageModule
            ),
    },
    {
        path: 'hubspot-form',
        loadChildren: () =>
            import('./pages/capacitor/hubspot-form/hubspot-form.module').then(
                (m) => m.HubspotFormPageModule
            ),
    },
    {
        path: 'in-page-navigation',
        loadChildren: () =>
            import(
                './pages/capacitor/in-page-navigation/in-page-navigation.module'
            ).then((m) => m.InPageNavigationPageModule),
    },
    {
        path: 'landing-page',
        loadChildren: () =>
            import('./pages/capacitor/landing-page/landing-page.module').then(
                (m) => m.LandingPagePageModule
            ),
    },
    {
        path: 'lower-content-nav',
        loadChildren: () =>
            import(
                './pages/capacitor/lower-content-nav/lower-content-nav.module'
            ).then((m) => m.LowerContentNavPageModule),
    },
    {
        path: 'more-button',
        loadChildren: () =>
            import('./pages/capacitor/more-button/more-button.module').then(
                (m) => m.MoreButtonPageModule
            ),
    },
    {
        path: 'newsletter-signup',
        loadChildren: () =>
            import(
                './pages/capacitor/newsletter-signup/newsletter-signup.module'
            ).then((m) => m.NewsletterSignupPageModule),
    },
    {
        path: 'plugin-api',
        loadChildren: () =>
            import('./pages/capacitor/plugin-api/plugin-api.module').then(
                (m) => m.PluginApiPageModule
            ),
    },
    {
        path: 'plugin-platforms',
        loadChildren: () =>
            import(
                './pages/capacitor/plugin-platforms/plugin-platforms.module'
            ).then((m) => m.PluginPlatformsPageModule),
    },
    {
        path: 'pre-footer',
        loadChildren: () =>
            import('./pages/capacitor/pre-footer/pre-footer.module').then(
                (m) => m.PreFooterPageModule
            ),
    },
    {
        path: 'site-backdrop',
        loadChildren: () =>
            import('./pages/capacitor/site-backdrop/site-backdrop.module').then(
                (m) => m.SiteBackdropPageModule
            ),
    },
    {
        path: 'solution-page',
        loadChildren: () =>
            import('./pages/capacitor/solution-page/solution-page.module').then(
                (m) => m.SolutionPagePageModule
            ),
    },
    {
        path: 'tabs.tsx',
        loadChildren: () =>
            import('./pages/capacitor/tabs/tabs.tsx.module').then(
                (m) => m.Tabs.TsxPageModule
            ),
	},
	*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
