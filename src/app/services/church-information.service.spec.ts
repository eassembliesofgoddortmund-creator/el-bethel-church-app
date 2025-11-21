import { TestBed } from '@angular/core/testing';

import { ChurchInformationService } from './church-information.service';

describe('ChurchInformationService', () => {
  let service: ChurchInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChurchInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
