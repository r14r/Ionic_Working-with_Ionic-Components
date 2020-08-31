import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMenuPage } from './site-menu.page';

describe('SiteMenuPage', () => {
  let component: SiteMenuPage;
  let fixture: ComponentFixture<SiteMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
