import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CvData } from './../interfaces/cv-data';

@Injectable()
export class MyDataService {

	constructor(private http: HttpClient) {}

  	fetchData(): Observable<CvData>{
  		return this.http.get('data/myData.json');
  	}
  	
}