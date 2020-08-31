import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerColumnPage } from './picker-column.page';

describe('PickerColumnPage', () => {
  let component: PickerColumnPage;
  let fixture: ComponentFixture<PickerColumnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerColumnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerColumnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
