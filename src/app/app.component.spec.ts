import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './app.config';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material.module';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        BackgroundImageComponent,
        WelcomePageComponent
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
