import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
	templateUrl: 'popover-content.page.html',
	styleUrls: ['popover-content.page.scss']
})
export class PopoverContentPage {
	@ViewChild('popoverContent', { static: false /* read: ElementRef  */ }) content: ElementRef;
	@ViewChild('popoverText', { static: false /* read: ElementRef  */ }) text: ElementRef;

	constructor(private popoverCtrl: PopoverController) {

	}

	async presentPopover(ev) {
		/*
		const popover = await this.popoverCtrl.create(PopoverPage, {
			contentEle: this.content.nativeElement,
			textEle: this.text.nativeElement
		});

		popover.present({
			ev
		});
		*/
	}
}
