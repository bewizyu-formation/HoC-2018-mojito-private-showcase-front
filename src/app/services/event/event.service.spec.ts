import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import {MaterialModule} from '../../material.module';
import {MatGridListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
