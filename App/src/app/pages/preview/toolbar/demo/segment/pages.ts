import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
    templateUrl: 'template.html',
})
export class SegmentPage {
    isAndroid = false;
    selectedSegment = 'hot';

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }
}
