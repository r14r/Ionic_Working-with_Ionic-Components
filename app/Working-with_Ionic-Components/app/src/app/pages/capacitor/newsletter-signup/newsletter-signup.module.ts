import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsletterSignupPage } from './newsletter-signup.page';

const routes: Routes = [
  {
    path: '',
    component: NewsletterSignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsletterSignupPage]
})
export class NewsletterSignupPageModule {}
