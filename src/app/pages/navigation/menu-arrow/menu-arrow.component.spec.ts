import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArrowComponent } from './menu-arrow.component';
import {MaterialModule} from '../../../material.module';

describe('MenuArrowComponent', () => {
  let component: MenuArrowComponent;
  let fixture: ComponentFixture<MenuArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuArrowComponent ],
      imports : [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
