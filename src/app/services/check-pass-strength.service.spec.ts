import { TestBed } from '@angular/core/testing';

import { CheckPassStrengthService } from './check-pass-strength.service';

describe('CheckPassStrengthService', () => {
  let service: CheckPassStrengthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPassStrengthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
