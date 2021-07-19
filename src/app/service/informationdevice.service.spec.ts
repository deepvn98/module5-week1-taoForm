import { TestBed } from '@angular/core/testing';

import { InformationdeviceService } from './informationdevice.service';

describe('InformationdeviceService', () => {
  let service: InformationdeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationdeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
