import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPagePage } from './blog-page.page';

describe('BlogPagePage', () => {
  let component: BlogPagePage;
  let fixture: ComponentFixture<BlogPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
