import { TestBed, inject } from '@angular/core/testing';

import { EducationDataService } from './education-data.service';

describe('EducationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationDataService]
    });
  });

  it('should be created', inject([EducationDataService], (service: EducationDataService) => {
    expect(service).toBeTruthy();
  }));
});
