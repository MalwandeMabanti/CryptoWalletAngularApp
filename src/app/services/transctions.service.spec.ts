import { TestBed } from '@angular/core/testing';

import { TransctionsService } from './transctions.service';

describe('TransctionsService', () => {
  let service: TransctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
