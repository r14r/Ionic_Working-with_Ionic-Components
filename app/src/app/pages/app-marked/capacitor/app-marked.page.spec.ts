import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMarkedPage } from './app-marked.page';

describe('AppMarkedPage', () => {
  let component: AppMarkedPage;
  let fixture: ComponentFixture<AppMarkedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMarkedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMarkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
