import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.page.html',
	styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
	popover = null;
	currentPopover = null;

	constructor(private popoverController: PopoverController) { }

	ngOnInit() {
	}

	initPopovers() {
		const popoverController = document.querySelector('ion-popover-controller');


		const button = document.querySelector('ion-button');
		button.addEventListener('click', this.handleButtonClick);

		customElements.define('popover-example-page', class ModalContent extends HTMLElement {
			connectedCallback() {
				this.innerHTML = `
  <ion-list>
	<ion-list-header>Ionic</ion-list-header>
	<ion-item button>Learn Ionic</ion-item>
	<ion-item button>Documentation</ion-item>
	<ion-item button>Showcase</ion-item>
	<ion-item button>GitHub Repo</ion-item>
  </ion-list>
  <ion-button expand="block" onClick="dismissPopover()">Close</ion-button>
`;
			}
		});
	}

	async  handleButtonClick(ev) {
		this.popover = await this.popoverController.create({
			component: 'popover-example-page',
			event: ev,
			translucent: true
		});
		this.currentPopover = this.popover;
		return this.popover.present();
	}

	dismissPopover() {
		if (this.currentPopover) {
			this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
		}
	}
}
