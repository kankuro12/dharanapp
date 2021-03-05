import { TestBed } from '@angular/core/testing';

import { CategorytitleService } from './categorytitle.service';

describe('CategorytitleService', () => {
  let service: CategorytitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorytitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
