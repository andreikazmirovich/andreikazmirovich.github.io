import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

	coursesData = [] as any;

  constructor(private newService: CoursesDataService) { }

  ngOnInit() {
  	this.newService.fetchData().subscribe(data => {
  		this.coursesData = data;
  	});

  }

}
