import { TestBed } from '@angular/core/testing';

import { HopsService } from './hops.service';

describe('HopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HopsService = TestBed.get(HopsService);
    expect(service).toBeTruthy();
  });
});
