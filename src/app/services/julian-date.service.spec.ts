import { TestBed } from '@angular/core/testing';

import { JulianDateService } from './julian-date.service';

describe('JulianDateService', () => {
  let service: JulianDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JulianDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
