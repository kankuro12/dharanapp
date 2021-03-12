import { TestBed } from '@angular/core/testing';

import { OrdercacheService } from './ordercache.service';

describe('OrdercacheService', () => {
  let service: OrdercacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdercacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
