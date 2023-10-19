import { TestBed } from '@angular/core/testing';

import { SuperhumanService } from './superhuman.service';

describe('SuperhumanService', () => {
  let service: SuperhumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperhumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
