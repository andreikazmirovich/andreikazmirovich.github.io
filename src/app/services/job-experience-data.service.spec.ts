import { TestBed, inject } from '@angular/core/testing';

import { JobExperienceDataService } from './job-experience-data.service';

describe('JobExperienceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobExperienceDataService]
    });
  });

  it('should be created', inject([JobExperienceDataService], (service: JobExperienceDataService) => {
    expect(service).toBeTruthy();
  }));
});
