import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoversPage } from './popovers.page';

describe('PopoversPage', () => {
  let component: PopoversPage;
  let fixture: ComponentFixture<PopoversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoversPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
