import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBarPage } from './site-bar.page';

describe('SiteBarPage', () => {
  let component: SiteBarPage;
  let fixture: ComponentFixture<SiteBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
