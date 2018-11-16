import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfilComponent } from './menu-profil.component';
import {MaterialModule} from '../../../material.module';

describe('MenuProfilComponent', () => {
  let component: MenuProfilComponent;
  let fixture: ComponentFixture<MenuProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProfilComponent ],
      imports : [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
