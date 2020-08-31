import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosPagePage } from './demos-page.page';

describe('DemosPagePage', () => {
  let component: DemosPagePage;
  let fixture: ComponentFixture<DemosPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
