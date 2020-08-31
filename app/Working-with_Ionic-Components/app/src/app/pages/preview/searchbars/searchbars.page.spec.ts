import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarsPage } from './searchbars.page';

describe('SearchbarsPage', () => {
  let component: SearchbarsPage;
  let fixture: ComponentFixture<SearchbarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
