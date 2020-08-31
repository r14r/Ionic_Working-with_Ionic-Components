import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkPage } from './nav-link.page';

describe('NavLinkPage', () => {
  let component: NavLinkPage;
  let fixture: ComponentFixture<NavLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
