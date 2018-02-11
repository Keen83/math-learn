import { TestBed, inject } from '@angular/core/testing';

import { Eq2strService } from './eq2str.service';

describe('Eq2strService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Eq2strService]
    });
  });

  it('should be created', inject([Eq2strService], (service: Eq2strService) => {
    expect(service).toBeTruthy();
  }));
});
