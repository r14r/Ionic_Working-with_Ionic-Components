import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.page.html',
	styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarSegmentPage implements OnInit {

	isAndroid = false;
	selectedSegment = 'hot';

	constructor(platform: Platform) {
		this.isAndroid = platform.is('android');
	}

	ngOnInit() {
	}
}
