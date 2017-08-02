import { TestBed, inject } from '@angular/core/testing';

import { PassengerServiceService } from './company-service.service';

describe('PassengerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengerServiceService]
    });
  });

  it('should be created', inject([PassengerServiceService], (service: PassengerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
