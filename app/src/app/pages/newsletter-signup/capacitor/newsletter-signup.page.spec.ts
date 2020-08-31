import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSignupPage } from './newsletter-signup.page';

describe('NewsletterSignupPage', () => {
  let component: NewsletterSignupPage;
  let fixture: ComponentFixture<NewsletterSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterSignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
