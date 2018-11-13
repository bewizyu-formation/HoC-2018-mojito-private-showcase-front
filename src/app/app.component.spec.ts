import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomeComponent
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
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
