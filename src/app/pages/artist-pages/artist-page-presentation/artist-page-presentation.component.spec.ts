import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPagePresentationComponent } from './artist-page-presentation.component';

describe('ArtistPagePresentationComponent', () => {
  let component: ArtistPagePresentationComponent;
  let fixture: ComponentFixture<ArtistPagePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPagePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
