import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageFormComponent } from './artist-page-form.component';

describe('ArtistPageFormComponent', () => {
  let component: ArtistPageFormComponent;
  let fixture: ComponentFixture<ArtistPageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
