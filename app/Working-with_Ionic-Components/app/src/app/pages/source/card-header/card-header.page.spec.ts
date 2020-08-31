import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderPage } from './card-header.page';

describe('CardHeaderPage', () => {
  let component: CardHeaderPage;
  let fixture: ComponentFixture<CardHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
