import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    template: `
        <ion-header>
            <ion-navbar color="primary">
                <ion-title>Toolbar: Primary</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding>
            <button ion-button block (click)="pushPage()">Next Page</button>
        </ion-content>
    `,
})
export class ToolbarColorsHomePage {
    constructor(public nav: NavController) {}

    pushPage() {
        this.nav.navigateForward('toolbar_colors_page2');
    }
}
