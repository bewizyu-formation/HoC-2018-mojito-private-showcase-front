import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material.module';
import { PageEventsComponent } from './page-events.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('PageEventsComponent', () => {
  let component: PageEventsComponent;
  let fixture: ComponentFixture<PageEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientModule,
        RouterModule
      ],
      declarations: [
        PageEventsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
