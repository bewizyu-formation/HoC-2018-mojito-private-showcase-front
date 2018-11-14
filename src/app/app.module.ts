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
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

import { ArtistePageComponent } from './artiste-page/artiste-page.component';
import { ArtistProfilComponent } from './artist-profil/artist-profil.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { PageEventsComponent } from './page-events/page-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import {MatIcon, MatIconModule, MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingComponent } from './rating/rating.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    LoginComponent,
    HomeComponent,
    ArtistePageComponent,
    ArtistProfilComponent,
    CreateEventComponent,
    PageEventsComponent,
    RatingComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
