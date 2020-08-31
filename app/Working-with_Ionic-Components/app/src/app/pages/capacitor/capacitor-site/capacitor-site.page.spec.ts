import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitorSitePage } from './capacitor-site.page';

describe('CapacitorSitePage', () => {
  let component: CapacitorSitePage;
  let fixture: ComponentFixture<CapacitorSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitorSitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitorSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
