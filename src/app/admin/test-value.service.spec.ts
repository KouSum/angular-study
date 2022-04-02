import { TestBed } from '@angular/core/testing';

import { TestValueService } from './test-value.service';

describe('TestValueService', () => {
  let service: TestValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
