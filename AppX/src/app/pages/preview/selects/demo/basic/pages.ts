import { Component } from '@angular/core';

@Component({
    templateUrl: 'template.html',
})
export class BasicPage {
    gaming = 'n64';
    gender = 'f';
    os: string;
    music: string;
    month: string;
    year: number;

    musicAlertOpts: { title: string; subTitle: string };

    constructor() {
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite',
        };
    }

    stpSelect() {
        console.log('STP selected');
    }
}
