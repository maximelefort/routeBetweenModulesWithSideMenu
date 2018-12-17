import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A1Page } from './a1.page';

describe('A1Page', () => {
  let component: A1Page;
  let fixture: ComponentFixture<A1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
