import { TestBed } from '@angular/core/testing';

import { ViewedService } from './viewed.service';

describe('ViewedService', () => {
  let service: ViewedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
