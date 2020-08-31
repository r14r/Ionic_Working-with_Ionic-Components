import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalContentPage } from './site-api/content/modal-content.page';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.page.html',
	styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

	constructor(public modalController: ModalController) { }

	ngOnInit() { }

	async presentModal() {
		const modal = await this.modalController.create({
			component: ModalContentPage
		});
		return await modal.present();
	}

	/*
	createModal() {
		controller.create({
			component: 'modal-content'
		}).then(modal => {
			modal.present();
			currentModal = modal;
		});
	}

	dismissModal() {
		if (currentModal) {
			currentModal.dismiss().then(() => { currentModal = null; });
		}
	}
	*/
}
