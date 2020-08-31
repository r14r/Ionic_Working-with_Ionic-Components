import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPopPage } from './nav-pop.page';

describe('NavPopPage', () => {
  let component: NavPopPage;
  let fixture: ComponentFixture<NavPopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
