import { TestBed } from '@angular/core/testing';

import { SwarsService } from './swars.service';

describe('SwarsService', () => {
  let service: SwarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
