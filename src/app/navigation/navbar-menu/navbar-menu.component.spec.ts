import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenuComponent } from './navbar-menu.component';
import { MaterialModule } from '../../material.module';
import { MenuLoginSigninComponent } from '../menu-login-signin/menu-login-signin.component';
import { MenuProfilComponent } from '../menu-profil/menu-profil.component';
import { MenuHamburgerComponent } from '../menu-hamburger/menu-hamburger.component';
import { MenuArrowComponent } from '../menu-arrow/menu-arrow.component';
import { MenuTitleComponent } from '../menu-title/menu-title.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('NavbarMenuComponent', () => {
  let component: NavbarMenuComponent;
  let fixture: ComponentFixture<NavbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarMenuComponent,
        MenuProfilComponent,
        MenuLoginSigninComponent,
        MenuHamburgerComponent,
        MenuArrowComponent,
        MenuTitleComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
