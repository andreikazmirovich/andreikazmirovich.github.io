import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducJobCoursesData } from './../interfaces/educJobCourses-data';

@Injectable()
export class EducationDataService {

	constructor(private http: HttpClient) { }

	fetchData(): Observable<EducJobCoursesData>{
		return this.http.get('../data/education.json');
	}
	
}
