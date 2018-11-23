import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPagePresentationComponent } from './artist-page-presentation.component';
import {MaterialModule} from '../../../material.module';
import {CardComponent} from '../card/card.component';
import {RatingComponent} from '../../homepage/rating/rating.component';

describe('ArtistPagePresentationComponent', () => {
  let component: ArtistPagePresentationComponent;
  let fixture: ComponentFixture<ArtistPagePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArtistPagePresentationComponent,
        CardComponent,
        RatingComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
