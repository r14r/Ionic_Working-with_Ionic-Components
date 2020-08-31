import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginApiPage } from './plugin-api.page';

describe('PluginApiPage', () => {
  let component: PluginApiPage;
  let fixture: ComponentFixture<PluginApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginApiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
