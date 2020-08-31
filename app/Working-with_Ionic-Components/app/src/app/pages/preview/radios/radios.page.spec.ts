import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosPage } from './radios.page';

describe('RadiosPage', () => {
  let component: RadiosPage;
  let fixture: ComponentFixture<RadiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
