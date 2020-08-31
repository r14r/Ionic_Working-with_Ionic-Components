import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.page.html',
	styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
	colors = [
		'success', 'warning', 'danger',
		'primary', 'secondary', 'tertiary',
		'light', 'medium', 'dark'
	];

	classes = [
		'activated', 'ion-focused'
	];

	sizes = ['small', 'default', 'large'];

	testingColors = ['primary', 'secondary', 'danger', 'dark'];
	testingColorIndex = {
		dynamicColor1: 0,
		dynamicColor2: 0
	};

	constructor() { }

	ngOnInit() {
	}


	changeColor(ev) {
		const el = ev.currentTarget;

		this.testingColorIndex[el.id] = (this.testingColorIndex[el.id] >= this.testingColors.length - 1 ? 0 : this.testingColorIndex[el.id] +
			1);

		el.color = this.testingColors[this.testingColorIndex[el.id]];
	}

	toggleDisabled(ev) {
		const button = ev.currentTarget;
		button.disabled = !button.disabled;
	}

	clickedButton(ev) {
		console.log('Clicked button', ev);
	}

}
