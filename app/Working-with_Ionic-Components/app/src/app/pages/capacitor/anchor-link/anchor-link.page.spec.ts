import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorLinkPage } from './anchor-link.page';

describe('AnchorLinkPage', () => {
  let component: AnchorLinkPage;
  let fixture: ComponentFixture<AnchorLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorLinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
