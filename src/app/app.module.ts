import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { CommonHeadersInterceptorService } from './services/interceptors/common-headers-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BackgroundImageComponent } from './background-image/background-image.component';

// PAGES
import { NavbarMenuComponent } from './navigation/navbar-menu/navbar-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ArtistePageComponent } from './artiste-page/artiste-page.component';
import { ArtistProfilComponent } from './artist-profil/artist-profil.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { PageEventsComponent } from './page-events/page-events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RatingComponent } from './rating/rating.component';
import { ListComponent } from './list/list.component';

// ROUTES
import { appRoutes } from './app.routing'; // mes routes
import { RouterModule } from '@angular/router';
import { MenuLoginSigninComponent } from './navigation/menu-login-signin/menu-login-signin.component';
import { MenuProfilComponent } from './navigation/menu-profil/menu-profil.component';
import { MenuHamburgerComponent } from './navigation/menu-hamburger/menu-hamburger.component';
import { MenuArrowComponent } from './navigation/menu-arrow/menu-arrow.component';
import { MenuTitleComponent } from './navigation/menu-title/menu-title.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    WelcomeComponent,
    SigninComponent,
    LoginComponent,
    HomeComponent,
    ArtistePageComponent,
    ArtistProfilComponent,
    CreateEventComponent,
    PageEventsComponent,
    RatingComponent,
    ListComponent,
    NavbarMenuComponent,
    NotFoundComponent,
    MenuLoginSigninComponent,
    MenuProfilComponent,
    MenuHamburgerComponent,
    MenuArrowComponent,
    MenuTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: APP_CONFIG, useValue: environment},
    {provide : HTTP_INTERCEPTORS, useClass : CommonHeadersInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : ErrorInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
