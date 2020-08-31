import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglesPage } from './toggles.page';

describe('TogglesPage', () => {
  let component: TogglesPage;
  let fixture: ComponentFixture<TogglesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
