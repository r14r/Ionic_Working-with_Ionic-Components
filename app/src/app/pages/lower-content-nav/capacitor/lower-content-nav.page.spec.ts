import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerContentNavPage } from './lower-content-nav.page';

describe('LowerContentNavPage', () => {
  let component: LowerContentNavPage;
  let fixture: ComponentFixture<LowerContentNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerContentNavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerContentNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
