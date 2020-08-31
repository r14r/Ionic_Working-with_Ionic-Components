import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const ICON_DEFAULT = '';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appMenu = [
		{
			name: 'Home', items: [
				{ name: 'Home', url: '/home', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Action Sheet', items: [
				{ name: 'Action Sheet', url: '/action-sheet', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Alert', items: [
				{ name: 'Alert', url: '/alert', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Button', items: [
				{ name: 'Button', url: '/button', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Card', items: [
				{ name: 'Card', url: '/card', icon: ICON_DEFAULT }

			]
		},
		{
			name: 'Checkbox', items: [
				{ name: 'Checkbox', url: '/checkbox', icon: ICON_DEFAULT }

			]
		},
		{
			name: 'Anchor Link', items: [
				{ name: 'Capacitor', url: '/anchor-link/capacitor', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Anchor', items: [
				{ name: 'Source', url: '/anchor/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'App Burger', items: [
				{ name: 'Capacitor', url: '/app-burger/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'App Icon', items: [
				{ name: 'Capacitor', url: '/app-icon/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'App Marked', items: [
				{ name: 'Capacitor', url: '/app-marked/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'App', items: [
				{ name: 'Source', url: '/app/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Avatar', items: [
				{ name: 'Avatar', url: '/avatar', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/avatar/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Avc Code Type', items: [
				{ name: 'Capacitor', url: '/avc-code-type/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Back Button', items: [
				{ name: 'Back Button', url: '/back-button', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Backdrop', items: [
				{ name: 'Backdrop', url: '/backdrop', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Badge', items: [
				{ name: 'Badge', url: '/badge', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Blog Page', items: [
				{ name: 'Capacitor', url: '/blog-page/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Capacitor Site', items: [
				{ name: 'Capacitor', url: '/capacitor-site/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Card Header', items: [
				{ name: 'Source', url: '/card-header/source', icon: ICON_DEFAULT },
			]
		},

		{
			name: 'Chip', items: [
				{ name: 'Chip', url: '/chip', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Component Preview', items: [
				{ name: 'Preview Component', url: '/component-preview/preview-component', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Content', items: [
				{ name: 'Content', url: '/content', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Contributor List', items: [
				{ name: 'Capacitor', url: '/contributor-list/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Datetime', items: [
				{ name: 'Datetime', url: '/datetime', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Demos Page', items: [
				{ name: 'Capacitor', url: '/demos-page/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Doc Snippet', items: [
				{ name: 'Capacitor', url: '/doc-snippet/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Document Component', items: [
				{ name: 'Capacitor', url: '/document-component/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Fab Button', items: [
				{ name: 'Source', url: '/fab-button/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Fab', items: [
				{ name: 'Fab', url: '/fab', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/fab/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/fab/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/fab/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Footer', items: [
				{ name: 'Source', url: '/footer/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Gestures', items: [
				{ name: 'Preview', url: '/gestures/preview', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Grid', items: [
				{ name: 'Grid', url: '/grid', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Header', items: [
				{ name: 'Source', url: '/header/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Icon', items: [
				{ name: 'Icon', url: '/icon', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Icons', items: [
				{ name: 'Preview', url: '/icons/preview', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Img', items: [
				{ name: 'Source', url: '/img/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'In Page Navigation', items: [
				{ name: 'Capacitor', url: '/in-page-navigation/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Infinite Scroll', items: [
				{ name: 'Infinite Scroll', url: '/infinite-scroll', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Input', items: [
				{ name: 'Input', url: '/input', icon: ICON_DEFAULT }
			]
		},
		{
			name: 'Inputs', items: [
				{ name: 'Preview', url: '/inputs/preview', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Item Divider', items: [
				{ name: 'Source', url: '/item-divider/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Item Sliding', items: [
				{ name: 'Source', url: '/item-sliding/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Item', items: [
				{ name: 'Item', url: '/item', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/item/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Label', items: [
				{ name: 'Source', url: '/label/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Landing Page', items: [
				{ name: 'Capacitor', url: '/landing-page/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'List', items: [
				{ name: 'List', url: '/list', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/list/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/list/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/list/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Loading', items: [
				{ name: 'Loading', url: '/loading', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/loading/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/loading/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/loading/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Lower Content Nav', items: [
				{ name: 'Capacitor', url: '/lower-content-nav/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Menu Button', items: [
				{ name: 'Source', url: '/menu-button/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Menu Toggle', items: [
				{ name: 'Source', url: '/menu-toggle/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Menu', items: [
				{ name: 'Menu', url: '/menu', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/menu/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/menu/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/menu/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Modal', items: [
				{ name: 'Modal', url: '/modal', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/modal/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview Content', url: '/modal/preview/content', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/modal/preview', icon: ICON_DEFAULT },
				{ name: 'Site Api Content', url: '/modal/site-api/content', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/modal/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Nav Link', items: [
				{ name: 'Source', url: '/nav-link/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Nav Pop', items: [
				{ name: 'Source', url: '/nav-pop/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Nav Push', items: [
				{ name: 'Source', url: '/nav-push/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Nav Set Root', items: [
				{ name: 'Source', url: '/nav-set-root/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Nav', items: [
				{ name: 'Nav', url: '/nav', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/nav/preview-component', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/nav/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Navigation', items: [
				{ name: 'Preview', url: '/navigation/preview', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Newsletter Signup', items: [
				{ name: 'Capacitor', url: '/newsletter-signup/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Note', items: [
				{ name: 'Note', url: '/note', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/note/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Page Index', items: [
				{ name: 'Preview Component', url: '/page-index/preview-component', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Picker', items: [
				{ name: 'Picker', url: '/picker', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/picker/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Plugin Api', items: [
				{ name: 'Capacitor', url: '/plugin-api/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Plugin Platforms', items: [
				{ name: 'Capacitor', url: '/plugin-platforms/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Popover', items: [
				{ name: 'Popover', url: '/popover', icon: ICON_DEFAULT },
				{ name: 'Preview Component', url: '/popover/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview Basicpage', url: '/popover/preview/basicpage', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/popover/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/popover/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Progress Bar', items: [
				{ name: 'Progress Bar', url: '/progress-bar', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/progress-bar/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Radio Group', items: [
				{ name: 'Source', url: '/radio-group/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Radio', items: [
				{ name: 'Radio', url: '/radio', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/radio/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Radios', items: [
				{ name: 'Preview', url: '/radios/preview', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Range', items: [
				{ name: 'Preview Component', url: '/range/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/range/preview', icon: ICON_DEFAULT },
				{ name: 'Range', url: '/range', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/range/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Refresher', items: [
				{ name: 'Preview Component', url: '/refresher/preview-component', icon: ICON_DEFAULT },
				{ name: 'Refresher', url: '/refresher', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/refresher/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Reorder', items: [
				{ name: 'Reorder', url: '/reorder', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/reorder/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Ripple Effect', items: [
				{ name: 'Source', url: '/ripple-effect/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Router Link', items: [
				{ name: 'Router Link', url: '/router-link', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/router-link/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Router Outlet', items: [
				{ name: 'Source', url: '/router-outlet/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Searchbar', items: [
				{ name: 'Preview Component', url: '/searchbar/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/searchbar/preview', icon: ICON_DEFAULT },
				{ name: 'Searchbar', url: '/searchbar', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/searchbar/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Segment', items: [
				{ name: 'Preview', url: '/segment/preview', icon: ICON_DEFAULT },
				{ name: 'Segment', url: '/segment', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/segment/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Select', items: [
				{ name: 'Preview Component', url: '/select/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/select/preview', icon: ICON_DEFAULT },
				{ name: 'Select', url: '/select', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/select/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Site Bar', items: [
				{ name: 'Capacitor', url: '/site-bar/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Site Header', items: [
				{ name: 'Capacitor', url: '/site-header/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Site Menu', items: [
				{ name: 'Capacitor', url: '/site-menu/capacitor', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Skeleton Text', items: [
				{ name: 'Skeleton Text', url: '/skeleton-text', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/skeleton-text/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Slides', items: [
				{ name: 'Preview Component', url: '/slides/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/slides/preview', icon: ICON_DEFAULT },
				{ name: 'Slides', url: '/slides', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/slides/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Spinner', items: [
				{ name: 'Preview Component', url: '/spinner/preview-component', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/spinner/source', icon: ICON_DEFAULT },
				{ name: 'Spinner', url: '/spinner', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Split Pane', items: [
				{ name: 'Source', url: '/split-pane/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Tab Bar', items: [
				{ name: 'Preview', url: '/tab-bar/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/tab-bar/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Text', items: [
				{ name: 'Source', url: '/text/source', icon: ICON_DEFAULT },
				{ name: 'Text', url: '/text', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Textarea', items: [
				{ name: 'Source', url: '/textarea/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Thumbnail', items: [
				{ name: 'Source', url: '/thumbnail/source', icon: ICON_DEFAULT },
				{ name: 'Thumbnail', url: '/thumbnail', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Title', items: [
				{ name: 'Source', url: '/title/source', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Toast', items: [
				{ name: 'Preview Component', url: '/toast/preview-component', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/toast/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/toast/source', icon: ICON_DEFAULT },
				{ name: 'Toast', url: '/toast', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Toggle', items: [
				{ name: 'Preview', url: '/toggle/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/toggle/source', icon: ICON_DEFAULT },
				{ name: 'Toggle', url: '/toggle', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Toolbar', items: [
				{ name: 'Preview Basic', url: '/toolbar/preview/basic', icon: ICON_DEFAULT },
				{ name: 'Preview Buttons', url: '/toolbar/preview/buttons', icon: ICON_DEFAULT },
				{ name: 'Preview Colors', url: '/toolbar/preview/colors', icon: ICON_DEFAULT },
				{ name: 'Preview Searchbar', url: '/toolbar/preview/searchbar', icon: ICON_DEFAULT },
				{ name: 'Preview Segment', url: '/toolbar/preview/segment', icon: ICON_DEFAULT },
				{ name: 'Preview', url: '/toolbar/preview', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/toolbar/source', icon: ICON_DEFAULT },
				{ name: 'Toolbar', url: '/toolbar', icon: ICON_DEFAULT },
			]
		},
		{
			name: 'Virtual Scroll', items: [
				{ name: 'Preview Component', url: '/virtual-scroll/preview-component', icon: ICON_DEFAULT },
				{ name: 'Source', url: '/virtual-scroll/source', icon: ICON_DEFAULT },
			]
		},



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

	onClick(ev: any) {
		console.log('onClick', 'event=' + ev);
	}
}