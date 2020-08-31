import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.page.html',
	styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarSearchbarPage implements OnInit {
	items;

	initializeItems() {
		this.items = [
			'Angular 1.x',
			'Angular 2',
			'ReactJS',
			'EmberJS',
			'Meteor',
			'Typescript',
			'Dart',
			'CoffeeScript'
		];
	}

	constructor() {
		this.initializeItems();
	}

	ngOnInit() {
	}

	getItems(ev) {
		this.initializeItems();

		const val = ev.target.value;

		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}

