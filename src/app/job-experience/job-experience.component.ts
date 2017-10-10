import { Component, OnInit } from '@angular/core';
import { JobExperienceDataService } from './../services/job-experience-data.service';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.less']
})

export class JobExperienceComponent implements OnInit {

	jobsData = [] as any;

  	constructor(private newService: JobExperienceDataService) {}

  	ngOnInit() {
  		this.newService.fetchData().subscribe(data => {
  			this.jobsData = data;
  		});
  	}

}
