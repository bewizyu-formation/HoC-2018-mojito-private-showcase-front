import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageComponent } from './background-image.component';
import {MaterialModule} from '../../../material.module';


describe('BackgroundImageComponent', () => {
  let component: BackgroundImageComponent;
  let fixture: ComponentFixture<BackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundImageComponent ],
      imports: [
        MaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
