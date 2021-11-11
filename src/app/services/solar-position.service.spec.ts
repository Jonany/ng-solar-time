import { TestBed } from '@angular/core/testing';

import { SolarPositionService } from './solar-position.service';

describe('SolarPositionService', () => {
  let service: SolarPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
