import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import {HomeComponent} from './home/home.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomeComponent,
        HomeComponent
      ],
      imports: [
        HttpClientModule,
        MaterialModule,
      ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
      ]
    }).compileComponents();
  }));
});
