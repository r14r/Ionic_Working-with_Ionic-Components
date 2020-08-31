import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPageNavigationPage } from './in-page-navigation.page';

describe('InPageNavigationPage', () => {
  let component: InPageNavigationPage;
  let fixture: ComponentFixture<InPageNavigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPageNavigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPageNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
