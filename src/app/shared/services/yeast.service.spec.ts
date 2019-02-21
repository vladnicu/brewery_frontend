import { TestBed } from '@angular/core/testing';

import { YeastService } from './yeast.service';

describe('YeastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YeastService = TestBed.get(YeastService);
    expect(service).toBeTruthy();
  });
});
