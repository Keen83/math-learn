import { TestBed, inject } from '@angular/core/testing';

import { EquationGeneratorService } from './equation-generator.service';

describe('EquationGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquationGeneratorService]
    });
  });

  it('should be created', inject([EquationGeneratorService], (service: EquationGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
