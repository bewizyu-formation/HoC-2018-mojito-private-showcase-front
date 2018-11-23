import {Routes, RouterModule} from '@angular/router';

// MES PAGES
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/homepage/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ArtistPageComponent } from './pages/artist-pages/artist-page/artist-page.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { PageEventsComponent } from './pages/page-events/page-events.component';
import {ContactComponent} from './pages/contact/contact.component';

// TABLEAU AVEC MES URLs LIES AUX COMPOSANTS
export const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'sigin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // PROTEGER LA ROUTE
  { path: 'user-profil/:userId', component: UserProfileComponent }, // PROTEGER LA ROUTE
  { path: 'artist-page/:userId', component: ArtistPageComponent }, // PROTEGER LA ROUTE
  { path: 'event-create/:eventId', component: CreateEventComponent },
  { path: 'events', component: PageEventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
