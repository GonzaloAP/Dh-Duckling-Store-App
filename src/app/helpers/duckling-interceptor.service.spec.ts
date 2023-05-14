import { TestBed } from '@angular/core/testing';

import { DucklingInterceptorService } from './duckling-interceptor.service';

describe('DucklingInterceptorService', () => {
  let service: DucklingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DucklingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
