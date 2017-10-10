import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectData } from './../interfaces/project-data';

@Injectable()
export class ProjectsDataService {

  	constructor(private http: HttpClient) { }

  	fetchData(): Observable<ProjectData>{
  		return this.http.get('../data/projects.json');
  	}

}
