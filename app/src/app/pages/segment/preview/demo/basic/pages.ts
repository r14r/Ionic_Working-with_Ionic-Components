import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';


@Component({
	templateUrl: 'template.html'
})
export class BasicPage {
	pet = 'puppies';
	isAndroid = false;

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}
}
