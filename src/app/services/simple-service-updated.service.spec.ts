import { TestBed } from '@angular/core/testing';

import { SimpleServiceUpdatedService } from './simple-service-updated.service';

describe('SimpleServiceUpdatedService', () => {
  let service: SimpleServiceUpdatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleServiceUpdatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
