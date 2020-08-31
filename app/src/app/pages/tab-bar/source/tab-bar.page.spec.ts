import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarPage } from './tab-bar.page';

describe('TabBarPage', () => {
  let component: TabBarPage;
  let fixture: ComponentFixture<TabBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
