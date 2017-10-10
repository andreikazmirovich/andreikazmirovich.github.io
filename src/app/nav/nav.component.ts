import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../services/my-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

	myData = {};
  	
  	constructor(private newService: MyDataService) { }

  	ngOnInit() {
  		this.newService.fetchData().subscribe(data => {
  			this.myData = data;
  			// this.myData.name.slice(0,1);
  		});
  	}

}
