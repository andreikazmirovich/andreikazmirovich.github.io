import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from './../services/projects-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})

export class ProjectsComponent implements OnInit {

	projectsData = [] as any;
  	
  constructor(private newService: ProjectsDataService) { }

  ngOnInit() {
  	this.newService.fetchData().subscribe(data => {
  		this.projectsData = data;
  	});
  }

}
