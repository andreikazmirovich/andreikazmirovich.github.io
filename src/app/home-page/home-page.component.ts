import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

	myData = {} as any;

  	constructor(private newService: MyDataService) { }

  	ngOnInit() {
  		this.newService.fetchData().subscribe(data => {
  			this.myData = data;
  		});
  	}

}
