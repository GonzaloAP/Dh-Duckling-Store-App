import { TestBed } from '@angular/core/testing';

import { DucklingService } from './duckling.service';

describe('DucklingService', () => {
  let service: DucklingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DucklingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
