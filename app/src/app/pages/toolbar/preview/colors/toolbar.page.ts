import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template: `
    <ion-header>
      <ion-navbar color="light">
        <ion-title>Toolbar: Light</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="goBack()">Go Back to Beginning</button>
    </ion-content>
  `
})
export class Toolbar4Page {
	constructor(private router: Router) { }

	goBack() {
		this.router.navigate([ToolbarColorsPage]);
	}
}

@Component({
	template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Toolbar: Danger</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Toolbar3Page {
	constructor(private router: Router) { }


	pushPage() {
		this.router.navigate([Toolbar4Page]);
	}
}


@Component({
	template: `
    <ion-header>
      <ion-navbar color="secondary">
        <ion-title>Toolbar: Secondary</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Toolbar2Page {
	constructor(private router: Router) { }


	pushPage() {
		this.router.navigate([Toolbar3Page]);
	}

}

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.page.html',
	styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarColorsPage implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	pushPage() {
		this.router.navigate([Toolbar2Page]);
	}

}
