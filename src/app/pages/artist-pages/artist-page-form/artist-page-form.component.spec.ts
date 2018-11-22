import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageFormComponent } from './artist-page-form.component';
import {MaterialModule} from '../../../material.module';
import {CardComponent} from '../card/card.component';

describe('ArtistPageFormComponent', () => {
  let component: ArtistPageFormComponent;
  let fixture: ComponentFixture<ArtistPageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPageFormComponent, CardComponent ],
      imports : [
        MaterialModule
      ]
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
