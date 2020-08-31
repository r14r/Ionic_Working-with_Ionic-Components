import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvcCodeTypePage } from './avc-code-type.page';

describe('AvcCodeTypePage', () => {
  let component: AvcCodeTypePage;
  let fixture: ComponentFixture<AvcCodeTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvcCodeTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvcCodeTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
