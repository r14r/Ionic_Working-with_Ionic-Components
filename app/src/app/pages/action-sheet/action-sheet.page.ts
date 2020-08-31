import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-action-sheet',
	templateUrl: './action-sheet.page.html',
	styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
	mode = 'md'; // Ionic.this.mode;

	controller: any;

	PREFIX = 'ActionShetPage';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor(
		public platform: Platform,
		private actionSheetController: ActionSheetController) { }

	ngOnInit() {
		console.log(this.platform.platforms());

		// ipad | iphone | ios | android | phablet | tablet | cordova | capacitor | electron | pwa | mobile | mobileweb | desktop | hybrid
		if (this.platform.is('mobileweb')) {
			console.log('mobile web');
		}

		if (this.platform.is('android')) {
			console.log('mobile web');
		}

		if (this.platform.is('ios')) {
			console.log('mobile web');
			this.mode = 'ios';
		}
	}

	// BASIC
	async presentBasicBasic() {
		this.log('presentBasicBasic');

		const actionSheet = await this.actionSheetController.create({
			header: 'Albums',
			buttons: [{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => { console.log('Delete clicked'); }
			}, {
				text: 'Share',
				icon: 'share',
				cssClass: 'activated',
				handler: () => { console.log('Share clicked'); }
			}, {
				text: 'Play (open modal)',
				icon: 'arrow-dropright-circle',
				handler: () => { console.log('Play clicked'); }
			}, {
				text: 'Favorite',
				icon: this.mode === 'md' ? 'heart' : null,
				handler: () => { console.log('Favorite clicked'); }
			}, {
				text: 'Cancel',
				icon: this.mode === 'md' ? 'close' : null,
				role: 'cancel',
				handler: () => { console.log('Cancel clicked'); }
			}]
		});

		actionSheet.onDidDismiss().then(_ => {
			this.log('presentBasicBasic', 'onDidDismiss');
		});

		actionSheet.onWillDismiss().then(_ => {
			this.log('presentBasicBasic', 'onWillDismiss');
		});

		this.log('presentBasicBasic', 'present action sheet');
		await actionSheet.present();


	}

	async presentBasicAlert() {
		this.log('presentBasicAlert');

		const actionSheet = await this.actionSheetController.create({
			buttons: [{
				text: 'Open Alert',
				handler: async () => {
					const alert = Object.assign(document.createElement('ion-alert'), {
						header: 'Alert from Action Sheet',
						subHeader: 'Subtitle',
						message: 'This is an alert message.',
						buttons: [{
							text: 'Okay',
							handler: async () => {
								await actionSheet.dismiss();
								return false;
							}
						}]
					});
					document.body.appendChild(alert);
					await alert.present();
					return false;
				}
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => { console.log('Cancel clicked'); }
			}],
		});

		actionSheet.onDidDismiss().then(_ => {
			this.log('onDidDismiss');
		});

		actionSheet.onWillDismiss().then(_ => {
			this.log('onWillDismiss');
		});

		this.log('presentBasicAlert', 'present action sheet');
		await actionSheet.present();
	}

	async presentBasicCancelOnly() {
		const actionSheet = await this.actionSheetController.create({
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel', // will always sort to be on the bottom
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		await actionSheet.present();
	}

	async presentBasicWithCSS() {
		this.log('presentBasicWithCSS');

		const actionSheet = await this.actionSheetController.create({
			header: 'Custom CSS',
			cssClass: 'my-color-class my-custom-class',
			buttons: [
				{
					text: 'Add to Favorites',
					icon: 'star',
					cssClass: 'my-custom-button customClass activated',
					handler: () => {
						console.log('Add to Favorites clicked');
					}
				},
				{
					text: 'Duplicate',
					icon: 'copy',
					handler: () => {
						console.log('Duplicate clicked');
					}
				},
				{
					text: 'Move to Album',
					icon: 'move',
					handler: () => {
						console.log('Move to Album clicked');
					}
				},
				{
					text: 'Delete',
					icon: 'trash',
					role: 'destructive',
					handler: () => {
						console.log('Delete clicked');
					}
				},
				{
					text: 'Cancel Operation',
					role: 'cancel',
					icon: 'close',
					cssClass: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		await actionSheet.present();
	}

	async presentBasicIcons() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Albums',
			buttons: [{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => { console.log('Delete clicked'); }
			}, {
				text: 'Share',
				icon: 'share',
				handler: () => { console.log('Share clicked'); }
			}, {
				text: 'Play (open modal)',
				icon: 'arrow-dropright-circle',
				handler: () => { console.log('Play clicked'); }
			}, {
				text: 'Favorite',
				icon: 'heart',
				role: 'selected',
				handler: () => { console.log('Favorite clicked'); }
			}, {
				text: 'Cancel',
				role: 'cancel',
				icon: 'close',
				handler: () => { console.log('Cancel clicked'); }
			}]
		});
		await actionSheet.present();
	}

	async presentBasicNoBackdropDismiss() {
		const actionSheet = await this.actionSheetController.create({
			backdropDismiss: false,
			buttons: [{
				text: 'Archive',
				handler: () => { console.log('Archive clicked'); }
			}, {
				text: 'Destructive',
				role: 'destructive',
				handler: () => { console.log('Destructive clicked'); }
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => { console.log('Cancel clicked'); }
			}]
		});
		await actionSheet.present();
	}

	async presentBasicScroll() {
		const actionSheet = await this.actionSheetController.create({
			buttons: [
				{
					text: 'Add Reaction',
					handler: () => {
						console.log('Add Reaction clicked');
					}
				}, {
					text: 'Copy Text',
					cssClass: 'activated',
					handler: () => {
						console.log('Copy Text clicked');
					}
				}, {
					text: 'Share Text',
					handler: () => {
						console.log('Share Text clicked');
					}
				}, {
					text: 'Copy Link to Message',
					handler: () => {
						console.log('Copy Link to Message clicked');
					}
				}, {
					text: 'Remind Me',
					handler: () => {
						console.log('Remind Me clicked');
					}
				}, {
					text: 'Pin File',
					handler: () => {
						console.log('Pin File clicked');
					}
				}, {
					text: 'Star File',
					handler: () => {
						console.log('Star File clicked');
					}
				}, {
					text: 'Mark Unread',
					handler: () => {
						console.log('Mark Unread clicked');
					}
				}, {
					text: 'Mark Read',
					handler: () => {
						console.log('Mark Read clicked');
					}
				}, {
					text: 'Edit Title',
					handler: () => {
						console.log('Edit Title clicked');
					}
				}, {
					text: 'Erase Title',
					handler: () => {
						console.log('Erase Title clicked');
					}
				}, {
					text: 'Save Image',
					handler: () => {
						console.log('Save Image clicked');
					}
				}, {
					text: 'Copy Image',
					handler: () => {
						console.log('Copy Image clicked');
					}
				}, {
					text: 'Erase Image',
					handler: () => {
						console.log('Erase Image clicked');
					}
				}, {
					text: 'Delete File',
					role: 'destructive',
					handler: () => {
						console.log('Delete File clicked');
					}
				}, {
					text: 'Cancel',
					role: 'cancel', // will always sort to be on the bottom
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		await actionSheet.present();
	}

	async presentBasicScrollNoCancel() {
		const actionSheet = await this.actionSheetController.create({
			buttons: [
				{
					text: 'Add Reaction',
					handler: () => {
						console.log('Add Reaction clicked');
					}
				}, {
					text: 'Copy Text',
					handler: () => {
						console.log('Copy Text clicked');
					}
				}, {
					text: 'Share Text',
					handler: () => {
						console.log('Share Text clicked');
					}
				}, {
					text: 'Copy Link to Message',
					handler: () => {
						console.log('Copy Link to Message clicked');
					}
				}, {
					text: 'Remind Me',
					handler: () => {
						console.log('Remind Me clicked');
					}
				}, {
					text: 'Pin File',
					handler: () => {
						console.log('Pin File clicked');
					}
				}, {
					text: 'Star File',
					handler: () => {
						console.log('Star File clicked');
					}
				}, {
					text: 'Mark Unread',
					handler: () => {
						console.log('Mark Unread clicked');
					}
				}, {
					text: 'Edit Title',
					handler: () => {
						console.log('Edit Title clicked');
					}
				}, {
					text: 'Save Image',
					handler: () => {
						console.log('Save Image clicked');
					}
				}, {
					text: 'Copy Image',
					handler: () => {
						console.log('Copy Image clicked');
					}
				}, {
					text: 'Delete File',
					role: 'destructive',
					handler: () => {
						console.log('Delete File clicked');
					}
				}
			]
		});
		await actionSheet.present();
	}

	//

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Albums',
			cssClass: 'action-sheets-basic-page',
			buttons: [
				{
					text: 'Delete',
					role: 'destructive',
					icon: !this.platform.is('ios') ? 'trash' : null,
					handler: () => { console.log('Delete clicked'); }
				},
				{
					text: 'Share',
					icon: !this.platform.is('ios') ? 'share' : null,
					handler: () => { console.log('Share clicked'); }
				},
				{
					text: 'Play',
					icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
					handler: () => { console.log('Play clicked'); }
				},
				{
					text: 'Favorite',
					icon: !this.platform.is('ios') ? 'heart-outline' : null,
					handler: () => { console.log('Favorite clicked'); }
				},
				{
					text: 'Cancel',
					role: 'cancel',
					icon: !this.platform.is('ios') ? 'close' : null,
					handler: () => { console.log('Cancel clicked'); }
				}
			]
		});
		actionSheet.present();
	}

	async presentActionSheetBasic() { }
	async presentActionSheetStandalone() { }
	async presentActionSheetTranslucent() { }


	// TRANSLUCENT
	async presentTranslucentBasic() {
		const actionSheetElement = await this.actionSheetController.create({
			header: 'Albums',
			buttons: [{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => { console.log('Delete clicked'); }
			}, {
				text: 'Share',
				icon: 'share',
				handler: () => { console.log('Share clicked'); }
			}, {
				text: 'Play (open modal)',
				icon: 'arrow-dropright-circle',
				handler: () => { console.log('Play clicked'); }
			}, {
				text: 'Favorite',
				icon: this.mode !== 'ios' ? 'heart' : null,
				handler: () => { console.log('Favorite clicked'); }
			}, {
				text: 'Cancel',
				role: 'cancel',
				icon: this.mode !== 'ios' ? 'close' : null,
				handler: () => { console.log('Cancel clicked'); }
			}],
			translucent: true
		});
		await actionSheetElement.present();
	}
	async presentTranslucentNoBackdropDismiss() {
		const actionSheetElement = await this.actionSheetController.create({
			backdropDismiss: false,
			buttons: [{
				text: 'Archive',
				handler: () => { console.log('Archive clicked'); }
			}, {
				text: 'Destructive',
				role: 'destructive',
				handler: () => { console.log('Destructive clicked'); }
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => { console.log('Cancel clicked'); }
			}],
			translucent: true
		});
		return await actionSheetElement.present();
	}
	async presentTranslucentAlert() {
		const actionSheetElement = await this.actionSheetController.create({
			buttons: [{
				text: 'Open Alert',
				handler: () => { console.log('Open Alert clicked'); }
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => { console.log('Cancel clicked'); }
			}],
			translucent: true
		});
		return await actionSheetElement.present();
	}
	async presentTranslucentScroll() {
		const actionSheetElement = await this.actionSheetController.create({
			buttons: [
				{
					text: 'Add Reaction',
					handler: () => {
						console.log('Add Reaction clicked');
					}
				}, {
					text: 'Copy Text',
					cssClass: 'activated',
					handler: () => {
						console.log('Copy Text clicked');
					}
				}, {
					text: 'Share Text',
					handler: () => {
						console.log('Share Text clicked');
					}
				}, {
					text: 'Copy Link to Message',
					handler: () => {
						console.log('Copy Link to Message clicked');
					}
				}, {
					text: 'Remind Me',
					handler: () => {
						console.log('Remind Me clicked');
					}
				}, {
					text: 'Pin File',
					handler: () => {
						console.log('Pin File clicked');
					}
				}, {
					text: 'Star File',
					handler: () => {
						console.log('Star File clicked');
					}
				}, {
					text: 'Mark Unread',
					handler: () => {
						console.log('Mark Unread clicked');
					}
				}, {
					text: 'Edit Title',
					cssClass: 'activated',
					handler: () => {
						console.log('Edit Title clicked');
					}
				}, {
					text: 'Save Image',
					handler: () => {
						console.log('Save Image clicked');
					}
				}, {
					text: 'Copy Image',
					handler: () => {
						console.log('Copy Image clicked');
					}
				}, {
					text: 'Delete File',
					role: 'destructive',
					handler: () => {
						console.log('Delete File clicked');
					}
				}, {
					text: 'Cancel',
					role: 'cancel', // will always sort to be on the bottom
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			],
			translucent: true
		});
		return await actionSheetElement.present();
	}
	async presentTranslucentScrollNoCancel() {
		const actionSheetElement = await this.actionSheetController.create({
			buttons: [
				{
					text: 'Add Reaction',
					handler: () => {
						console.log('Add Reaction clicked');
					}
				}, {
					text: 'Copy Text',
					handler: () => {
						console.log('Copy Text clicked');
					}
				}, {
					text: 'Share Text',
					handler: () => {
						console.log('Share Text clicked');
					}
				}, {
					text: 'Copy Link to Message',
					handler: () => {
						console.log('Copy Link to Message clicked');
					}
				}, {
					text: 'Remind Me',
					handler: () => {
						console.log('Remind Me clicked');
					}
				}, {
					text: 'Pin File',
					handler: () => {
						console.log('Pin File clicked');
					}
				}, {
					text: 'Star File',
					handler: () => {
						console.log('Star File clicked');
					}
				}, {
					text: 'Mark Unread',
					handler: () => {
						console.log('Mark Unread clicked');
					}
				}, {
					text: 'Edit Title',
					handler: () => {
						console.log('Edit Title clicked');
					}
				}, {
					text: 'Save Image',
					handler: () => {
						console.log('Save Image clicked');
					}
				}, {
					text: 'Copy Image',
					handler: () => {
						console.log('Copy Image clicked');
					}
				}, {
					text: 'Delete File',
					role: 'destructive',
					handler: () => {
						console.log('Delete File clicked');
					}
				}
			],
			translucent: true
		});
		return await actionSheetElement.present();
	}
	async presentTranslucentCancelOnly() {
		const actionSheet = await this.actionSheetController.create({
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel', // will always sort to be on the bottom
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			],
			translucent: true
		});
		return await actionSheet.present();
	}
	async presentTranslucentActionSheetSpec() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Open in',
			buttons: [{
				text: 'Item 1', icon: 'share',
				handler: () => { console.log('Share clicked'); }
			}, {
				text: 'Item 2', icon: 'link',
				handler: () => { console.log('Play clicked'); }
			}, {
				text: 'Item 3', icon: this.mode === 'md' ? 'create' : null,
				handler: () => { console.log('Favorite clicked'); }
			}, {
				text: 'Item 4', icon: this.mode === 'md' ? 'trash' : null,
				handler: () => { console.log('Cancel clicked'); }
			}, {
				text: 'Item 5',
				icon: this.mode === 'md' ? 'copy' : null,
				handler: () => { console.log('Cancel clicked'); }
			}]
		});
		await actionSheet.present();
	}


	ionActionSheetDidDismiss() {
		this.log('ionActionSheetDidDismiss');
	}
	ionActionSheetDidPresent() {
		this.log('ionActionSheetDidPresent');
	}
	ionActionSheetWillDismiss() {
		this.log('ionActionSheetWillDismiss');
	}
	ionActionSheetWillPresent() {
		this.log('ionActionSheetWillPresent');
	}

}
