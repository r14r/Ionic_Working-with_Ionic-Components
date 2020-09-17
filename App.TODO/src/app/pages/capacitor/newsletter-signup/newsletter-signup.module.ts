import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsletterSignupPageRoutingModule } from './newsletter-signup-routing.module';

import { NewsletterSignupPage } from './newsletter-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsletterSignupPageRoutingModule
  ],
  declarations: [NewsletterSignupPage]
})
export class NewsletterSignupPageModule {}
