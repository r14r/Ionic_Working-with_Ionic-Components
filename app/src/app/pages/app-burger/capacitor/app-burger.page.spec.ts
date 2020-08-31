import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBurgerPage } from './app-burger.page';

describe('AppBurgerPage', () => {
  let component: AppBurgerPage;
  let fixture: ComponentFixture<AppBurgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBurgerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBurgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
