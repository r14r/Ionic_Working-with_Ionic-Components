import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesPage } from './ranges.page';

describe('RangesPage', () => {
  let component: RangesPage;
  let fixture: ComponentFixture<RangesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
