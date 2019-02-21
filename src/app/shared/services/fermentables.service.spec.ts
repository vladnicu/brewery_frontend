import { TestBed } from '@angular/core/testing';

import { FermentablesService } from './fermentables.service';

describe('FermentablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FermentablesService = TestBed.get(FermentablesService);
    expect(service).toBeTruthy();
  });
});
