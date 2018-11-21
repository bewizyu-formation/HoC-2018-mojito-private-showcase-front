import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburgerComponent } from './menu-hamburger.component';
import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuHamburgerComponent', () => {
  let component: MenuHamburgerComponent;
  let fixture: ComponentFixture<MenuHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuHamburgerComponent
      ],
      imports : [
        MaterialModule,
        RouterModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
