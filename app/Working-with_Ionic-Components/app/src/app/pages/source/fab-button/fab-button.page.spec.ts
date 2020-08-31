import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabButtonPage } from './fab-button.page';

describe('FabButtonPage', () => {
  let component: FabButtonPage;
  let fixture: ComponentFixture<FabButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
