import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorPage } from './anchor.page';

describe('AnchorPage', () => {
  let component: AnchorPage;
  let fixture: ComponentFixture<AnchorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
