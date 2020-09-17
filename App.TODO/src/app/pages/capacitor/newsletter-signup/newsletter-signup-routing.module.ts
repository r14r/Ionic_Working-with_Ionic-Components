import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsletterSignupPage } from './newsletter-signup.page';

const routes: Routes = [
  {
    path: '',
    component: NewsletterSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsletterSignupPageRoutingModule {}
