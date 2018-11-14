import {Routes, RouterModule} from '@angular/router';

// MES PAGES
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';

// TABLEAU AVEC MES URLs LIES AUX COMPOSANTS
export const appRoutes: Routes = [
  { path: '',
    component: WelcomeComponent
  },
  { path: 'login/:id',
    component: SigninComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'sigin',
    component: SigninComponent
  },
  { path: 'home',
    component: HomeComponent
  },

  { path: '**',
    component: NotFoundComponent
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];
