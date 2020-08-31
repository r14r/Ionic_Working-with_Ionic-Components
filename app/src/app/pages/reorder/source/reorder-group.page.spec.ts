import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderGroupPage } from './reorder-group.page';

describe('ReorderGroupPage', () => {
  let component: ReorderGroupPage;
  let fixture: ComponentFixture<ReorderGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
