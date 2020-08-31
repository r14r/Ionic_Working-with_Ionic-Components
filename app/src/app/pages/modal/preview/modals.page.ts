import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ModalContentPage } from './content/modal-content.page';

@Component({
	selector: 'app-modals',
	templateUrl: './modals.page.html',
	styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {

	constructor(public modalController: ModalController) { }

	ngOnInit() {
	}

	async presentModal(characterNum) {
		const modal = await this.modalController.create({
			component: ModalContentPage,
			componentProps: { charNum: characterNum }
		});
		return await modal.present();
	}

	async onWillDismiss() {
		// const { data } = await this.modalController.onWillDismiss();
		console.log('dismiss with data');
	}

}
