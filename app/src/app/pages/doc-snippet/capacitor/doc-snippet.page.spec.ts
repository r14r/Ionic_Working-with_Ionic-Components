import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSnippetPage } from './doc-snippet.page';

describe('DocSnippetPage', () => {
  let component: DocSnippetPage;
  let fixture: ComponentFixture<DocSnippetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocSnippetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSnippetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
