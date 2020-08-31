import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentComponentPage } from './document-component.page';

describe('DocumentComponentPage', () => {
  let component: DocumentComponentPage;
  let fixture: ComponentFixture<DocumentComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
