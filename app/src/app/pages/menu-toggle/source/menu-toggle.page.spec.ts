import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTogglePage } from './menu-toggle.page';

describe('MenuTogglePage', () => {
  let component: MenuTogglePage;
  let fixture: ComponentFixture<MenuTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTogglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
