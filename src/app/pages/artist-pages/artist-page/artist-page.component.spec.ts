import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ArtistPageComponent} from './artist-page.component';
import {MaterialModule} from '../../../material.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ArtistPageFormComponent} from '../artist-page-form/artist-page-form.component';
import {ArtistPagePresentationComponent} from '../artist-page-presentation/artist-page-presentation.component';


describe('ArtistPageComponent', () => {
  let component: ArtistPageComponent;
  let fixture: ComponentFixture<ArtistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArtistPageComponent,
        ArtistPageFormComponent,
        ArtistPagePresentationComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
