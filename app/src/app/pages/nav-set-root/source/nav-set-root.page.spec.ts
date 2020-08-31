import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSetRootPage } from './nav-set-root.page';

describe('NavSetRootPage', () => {
  let component: NavSetRootPage;
  let fixture: ComponentFixture<NavSetRootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSetRootPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSetRootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
