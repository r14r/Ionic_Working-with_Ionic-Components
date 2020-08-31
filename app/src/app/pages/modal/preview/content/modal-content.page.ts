import { Component, Input } from '@angular/core';
import { ModalController, Platform, NavParams } from '@ionic/angular';

@Component({
	template: './modal-content.page.html',
	styleUrls: ['./modal-content.page.scss']
})
export class ModalContentPage {
	character;

	// Data passed in by componentProps
	@Input() firstName: string;
	@Input() lastName: string;
	@Input() middleInitial: string;


	constructor(
		public params: NavParams,
		public modalController: ModalController
	) {
		const characters = [
			{
				name: 'Gollum',
				quote: 'Sneaky little hobbitses!',
				image: 'assets/img/avatar-gollum.jpg',
				items: [
					{ title: 'Race', note: 'Hobbit' },
					{ title: 'Culture', note: 'River Folk' },
					{ title: 'Alter Ego', note: 'Smeagol' }
				]
			},
			{
				name: 'Frodo',
				quote: 'Go back, Sam! I\'m going to Mordor alone!',
				image: 'assets/img/avatar-frodo.jpg',
				items: [
					{ title: 'Race', note: 'Hobbit' },
					{ title: 'Culture', note: 'Shire Folk' },
					{ title: 'Weapon', note: 'Sting' }
				]
			},
			{
				name: 'Samwise Gamgee',
				quote: 'What we need is a few good taters.',
				image: 'assets/img/avatar-samwise.jpg',
				items: [
					{ title: 'Race', note: 'Hobbit' },
					{ title: 'Culture', note: 'Shire Folk' },
					{ title: 'Nickname', note: 'Sam' }
				]
			}
		];

		this.character = characters[this.params.get('charNum')];
	}

	dismiss() {
		this.modalController.dismiss({ dismissed: true });
	}
}


