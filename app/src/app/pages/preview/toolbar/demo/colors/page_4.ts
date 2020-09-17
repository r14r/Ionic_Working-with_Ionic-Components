import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    template: `
        <ion-header>
            <ion-navbar color="light">
                <ion-title>Toolbar: Light</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding>
            <button ion-button block (click)="goBack()">
                Go Back to Beginning
            </button>
        </ion-content>
    `,
})
export class ToolbarColorsPage4Page {
    constructor(public nav: NavController) {}

    goBack() {
        this.nav.navigateRoot('toolbar_colors_home');
    }
}
