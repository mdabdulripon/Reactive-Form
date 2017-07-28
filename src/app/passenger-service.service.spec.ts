import { TestBed, inject } from '@angular/core/testing';

import { PassengerServiceService } from './passenger-service.service';

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
