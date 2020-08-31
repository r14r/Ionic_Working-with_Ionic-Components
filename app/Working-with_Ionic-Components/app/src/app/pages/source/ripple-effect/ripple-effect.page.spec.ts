import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleEffectPage } from './ripple-effect.page';

describe('RippleEffectPage', () => {
  let component: RippleEffectPage;
  let fixture: ComponentFixture<RippleEffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleEffectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
