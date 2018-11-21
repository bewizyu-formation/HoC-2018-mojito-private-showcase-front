import {Routes, RouterModule} from '@angular/router';

// MES PAGES
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/homepage/home/home.component';
import { ArtistProfilComponent } from './pages/artist-profil/artist-profil.component';
import { ArtistPageComponent } from './pages/artist-pages/artist-page/artist-page.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { PageEventsComponent } from './pages/page-events/page-events.component';
import {ContactComponent} from './pages/contact/contact.component';

// TABLEAU AVEC MES URLs LIES AUX COMPOSANTS
export const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sigin', component: SigninComponent },
  { path: 'home', component: HomeComponent }, // Utiliser les routes ci-dessous et supprimer celle-ci
  { path: 'home/:artistId', component: HomeComponent },
  { path: 'home/:userId', component: HomeComponent },
  { path: 'artist-page/:artistName/:artistId', component: ArtistPageComponent },
  { path: 'artist-profil/:artistId', component: ArtistProfilComponent },
  { path: 'event-create/:eventId', component: CreateEventComponent },
  { path: 'events', component: PageEventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
