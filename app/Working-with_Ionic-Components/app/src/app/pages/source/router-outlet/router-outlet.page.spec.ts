import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutletPage } from './router-outlet.page';

describe('RouterOutletPage', () => {
  let component: RouterOutletPage;
  let fixture: ComponentFixture<RouterOutletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterOutletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterOutletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
