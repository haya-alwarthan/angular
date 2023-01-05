import { TestBed } from '@angular/core/testing';

import { BrocastUserService } from './brocast-user.service';

describe('BrocastUserService', () => {
  let service: BrocastUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrocastUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
