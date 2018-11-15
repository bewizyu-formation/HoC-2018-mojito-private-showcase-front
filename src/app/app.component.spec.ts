import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';

import {HomeComponent} from './pages/homepage/home/home.component';

import { BackgroundImageComponent } from './pages/navigation/background-image/background-image.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarMenuComponent } from './pages/navigation/navbar-menu/navbar-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuProfilComponent } from './pages/navigation/menu-profil/menu-profil.component';
import { MenuLoginSigninComponent } from './pages/navigation/menu-login-signin/menu-login-signin.component';
import { MenuHamburgerComponent } from './pages/navigation/menu-hamburger/menu-hamburger.component';
import { MenuArrowComponent } from './pages/navigation/menu-arrow/menu-arrow.component';
import { MenuTitleComponent } from './pages/navigation/menu-title/menu-title.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


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
        MenuArrowComponent,
        MenuTitleComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
      ]
    }).compileComponents();
  }));
});
