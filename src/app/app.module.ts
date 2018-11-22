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
import { BackgroundImageComponent } from './pages/navigation/background-image/background-image.component';

// PAGES
import { NavbarMenuComponent } from './pages/navigation/navbar-menu/navbar-menu.component';
import { MenuLoginSigninComponent } from './pages/navigation/menu-login-signin/menu-login-signin.component';
import { MenuProfilComponent } from './pages/navigation/menu-profil/menu-profil.component';
import { MenuHamburgerComponent } from './pages/navigation/menu-hamburger/menu-hamburger.component';
import { MenuArrowComponent } from './pages/navigation/menu-arrow/menu-arrow.component';
import { MenuTitleComponent } from './pages/navigation/menu-title/menu-title.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/homepage/home/home.component';
import { RatingComponent } from './pages/homepage/rating/rating.component';
import { ListComponent } from './pages/homepage/list/list.component';
import { ArtistPageComponent } from './pages/artist-pages/artist-page/artist-page.component';
import { ArtistPagePresentationComponent } from './pages/artist-pages/artist-page-presentation/artist-page-presentation.component';
import { ArtistPageFormComponent } from './pages/artist-pages/artist-page-form/artist-page-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { PageEventsComponent } from './pages/page-events/page-events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DisconnectComponent } from './pages/disconnect/disconnect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// ROUTES
import { appRoutes } from './app.routing'; // mes routes
import { RouterModule } from '@angular/router';

// SERVICES
import { UserService } from './services/user/user.service';
import { EventService } from './services/event/event.service';
import { ArtistService } from './services/artist/artist.service';
import { CardComponent } from './pages/artist-pages/card/card.component';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    WelcomeComponent,
    SigninComponent,
    LoginComponent,
    HomeComponent,
    ArtistPageComponent,
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
    MenuTitleComponent,
    ContactComponent,
    ArtistPagePresentationComponent,
    ArtistPageFormComponent,
    UserProfileComponent,
    DisconnectComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    EventService,
    ArtistService,
    UserService,
    MatDatepickerModule,
    {provide: APP_CONFIG, useValue: environment},
    {provide : HTTP_INTERCEPTORS, useClass : CommonHeadersInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass : ErrorInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
