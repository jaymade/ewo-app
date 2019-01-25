import { TestBed } from '@angular/core/testing';

import { EwoService } from './ewo.service';

describe('EwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EwoService = TestBed.get(EwoService);
    expect(service).toBeTruthy();
  });
});
