import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

import {
	FormGroup,
	FormControl,
	Validators
} from '@angular/forms';


@Component({
	templateUrl: 'template.html',
})
export class BasicPage {
	form;

	constructor(public alertCtrl: AlertController) {
		this.form = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required)
		});
	}

	async processForm() {
		const alert = await this.alertCtrl.create({
			header: 'Account Created',
			message: 'Created Account for: ' + this.form.value.firstName + ' ' + this.form.value.lastName,
			buttons: [{
				text: 'Ok',
			}]
		});

		if (this.form.status === 'VALID') {
			alert.present();
		}
	}

}
