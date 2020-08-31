import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorListPage } from './contributor-list.page';

describe('ContributorListPage', () => {
  let component: ContributorListPage;
  let fixture: ComponentFixture<ContributorListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
