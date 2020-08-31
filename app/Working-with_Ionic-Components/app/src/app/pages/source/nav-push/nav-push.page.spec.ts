import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPushPage } from './nav-push.page';

describe('NavPushPage', () => {
  let component: NavPushPage;
  let fixture: ComponentFixture<NavPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPushPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
