import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIndexPage } from './page-index.page';

describe('PageIndexPage', () => {
  let component: PageIndexPage;
  let fixture: ComponentFixture<PageIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
