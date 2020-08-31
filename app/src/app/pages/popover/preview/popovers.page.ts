import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

import { PopoverContentPage } from './content/popover-content.page';

@Component({
	selector: 'app-popovers',
	templateUrl: './popovers.page.html',
	styleUrls: ['./popovers.page.scss'],
})
export class PopoversPage implements OnInit {

	background: string;
	contentEle: any;
	textEle: any;
	fontFamily;

	colors = {
		white: { bg: 'rgb(255, 255, 255)', fg: 'rgb(0, 0, 0)' },
		tan: { bg: 'rgb(249, 241, 228)', fg: 'rgb(0, 0, 0)' },
		grey: { bg: 'rgb(76, 75, 80)', fg: 'rgb(255, 255, 255)' },
		black: { bg: 'rgb(0, 0, 0)', fg: 'rgb(255, 255, 255)' },
	};

	constructor(
		private navParams: NavParams,
		private popoverController: PopoverController
	) {

	}

	ngOnInit() {
		if (this.navParams.data) {
			this.contentEle = this.navParams.data.contentEle;
			this.textEle = this.navParams.data.textEle;

			this.background = this.getColorName(this.contentEle.style.backgroundColor);
			this.setFontFamily();
		}
	}

	getColorName(background) {
		let colorName = 'white';

		if (!background) { return 'white'; }

		for (const key in this.colors) {
			if (this.colors[key].bg === background) {
				colorName = key;
			}
		}

		return colorName;
	}

	setFontFamily() {
		if (this.textEle.style.fontFamily) {
			this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, '');
		}
	}

	changeBackground(color) {
		this.background = color;
		this.contentEle.style.backgroundColor = this.colors[color].bg;
		this.textEle.style.color = this.colors[color].fg;
	}

	changeFontSize(direction) {
		this.textEle.style.fontSize = direction;
	}

	changeFontFamily() {
		if (this.fontFamily) { this.textEle.style.fontFamily = this.fontFamily; }
	}

	//
	//
	//
	async presentPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverContentPage,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
}



