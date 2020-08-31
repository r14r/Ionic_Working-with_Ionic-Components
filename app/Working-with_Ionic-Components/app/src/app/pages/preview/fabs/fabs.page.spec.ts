import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabsPage } from './fabs.page';

describe('FabsPage', () => {
  let component: FabsPage;
  let fixture: ComponentFixture<FabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
