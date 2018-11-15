import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfilComponent } from './artist-profil.component';

describe('ArtistProfilComponent', () => {
  let component: ArtistProfilComponent;
  let fixture: ComponentFixture<ArtistProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
