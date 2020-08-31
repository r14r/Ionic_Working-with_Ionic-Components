import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const ICON_DEFAULT = 'list';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appMenu = [
		{ name: 'Home', url: '/home', icon: 'home' },
		{
			name: 'Source',
			items: [
				{ name: 'source/action-sheet', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/alert', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/anchor', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/app', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/avatar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/back-button', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/badge', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/button', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/buttons', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/card-header', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/card', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/checkbox', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/chip', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/content', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/datetime', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/fab-button', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/fab', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/footer', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/grid', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/header', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/icon', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/img', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/infinite-scroll', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/input', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/item-divider', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/item-sliding', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/item', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/label', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/list', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/loading', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/menu-button', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/menu-toggle', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/menu', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/modal', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/nav-link', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/nav-pop', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/nav-push', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/nav-set-root', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/nav', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/note', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/picker-column', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/picker', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/popover', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/progress-bar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/radio-group', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/radio', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/range', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/refresher', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/reorder-group', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/ripple-effect', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/router-link', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/router-outlet', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/router', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/searchbar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/segment', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/select', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/skeleton-text', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/slides', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/spinner', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/split-pane', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/tab-bar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/tabs', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/text', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/textarea', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/thumbnail', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/title', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/toast', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/toggle', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/toolbar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'source/virtual-scroll', url: '/_E', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Capacitor',
			items: [
				{ name: 'capacitor/site-menu', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/anchor-link', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/app-burger', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/app-icon', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/app-marked', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/avc-code-type', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/blog-page', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/capacitor-site', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/contributor-list', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/demos-page', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/doc-snippet', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/document-component', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/in-page-navigation', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/landing-page', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/lower-content-nav', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/newsletter-signup', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/plugin-api', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/plugin-platforms', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/site-bar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'capacitor/site-header', url: '/_E', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Preview',
			items: [
				{ name: 'preview/action-sheets', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/alerts', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/badges', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/buttons', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/cards', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/checkboxes', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/datetime', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/fabs', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/gestures', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/grid', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/icons', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/inputs', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/lists', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/loading', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/menus', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/modals', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/navigation', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/popovers', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/radios', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/ranges', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/searchbars', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/segments', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/selects', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/slides', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/tabs', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/toast', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/toggles', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview/toolbar', url: '/_E', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Preview Components',
			items: [
				{ name: 'preview-component/action-sheet', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/alert', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/badge', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/button', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/card', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/checkbox', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/component-preview', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/datetime', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/fab', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/grid', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/infinite-scroll', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/input', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/list', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/loading', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/menu', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/modal', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/nav', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/page-index', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/popover', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/range', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/refresher', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/searchbar', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/select', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/slides', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/spinner', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/tabs', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/toast', url: '/_E', icon: ICON_DEFAULT },
				{ name: 'preview-component/virtual-scroll', url: '/_E', icon: ICON_DEFAULT }
			]
		}
	];
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
