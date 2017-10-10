import { Component, OnInit } from '@angular/core';
import { EducationDataService } from './../services/education-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})

export class EducationComponent implements OnInit {

	educData = [] as any;
  	
  constructor(private newService: EducationDataService) { }

  ngOnInit() {
  	this.newService.fetchData().subscribe(data => {
  		this.educData = data;
  	});
  }

}
