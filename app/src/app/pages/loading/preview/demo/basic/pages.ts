import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';

@Component({
	templateUrl: 'template.html'
})
export class BasicPage {

	constructor(public loadingCtrl: LoadingController) { }

	async presentLoading() {
		// const opt: LoadingOptions;

		const loading = await this.loadingCtrl.create({
			message: 'Please wait...',
			duration: 3000,
			backdropDismiss: true
		});

		loading.present();
	}

}
