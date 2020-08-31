import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconPage } from './app-icon.page';

describe('AppIconPage', () => {
  let component: AppIconPage;
  let fixture: ComponentFixture<AppIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
