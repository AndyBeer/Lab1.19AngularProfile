import { TestBed } from '@angular/core/testing';

import { UpdateProfileInfoService } from './update-profile-info.service';

describe('UpdateProfileInfoService', () => {
  let service: UpdateProfileInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProfileInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
