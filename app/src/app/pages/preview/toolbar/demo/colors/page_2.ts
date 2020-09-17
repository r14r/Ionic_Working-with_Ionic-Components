import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    `,
})
export class ToolbarColorsPage2Page {
    constructor(public nav: NavController) {}

    pushPage() {
        this.nav.navigateForward('toolbar_colors_page3');
    }
}
