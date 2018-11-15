import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';

import {HomeComponent} from './home/home.component';

import { BackgroundImageComponent } from './background-image/background-image.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarMenuComponent } from './navigation/navbar-menu/navbar-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuProfilComponent } from './navigation/menu-profil/menu-profil.component';
import { MenuLoginSigninComponent } from './navigation/menu-login-signin/menu-login-signin.component';
import { MenuHamburgerComponent } from './navigation/menu-hamburger/menu-hamburger.component';
import { MenuArrowComponent } from './navigation/menu-arrow/menu-arrow.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomeComponent,
        HomeComponent,
        BackgroundImageComponent,
        WelcomeComponent,
        NavbarMenuComponent,
        MenuProfilComponent,
        MenuLoginSigninComponent,
        MenuHamburgerComponent,
        MenuArrowComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MaterialModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
      ]
    }).compileComponents();
  }));
});
