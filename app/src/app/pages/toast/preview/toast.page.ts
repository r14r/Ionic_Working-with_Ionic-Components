import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.page.html',
	styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
	constructor(public toastCtrl: ToastController) { }

	ngOnInit() {
	}

	async showToast(position: string) {
		const toast = await this.toastCtrl.create({
			message: 'Mmmm, buttered toast',
			duration: 2000,
			// position: position
		});

		toast.present();
	}

	async showToastWithCloseButton() {
		const toast = await this.toastCtrl.create({
			message: 'Your files were successfully saved',
			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.present();
	}

	async showLongToast() {
		const toast = await this.toastCtrl.create({
			message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
			duration: 2000,
		});
		toast.present();
	}
}

