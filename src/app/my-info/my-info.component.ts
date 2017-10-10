import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../services/my-data.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.less']
})

export class MyInfoComponent implements OnInit {
  	
  	myData = {} as any;

  	constructor(private newService: MyDataService) { }

	ngOnInit() {
		this.newService.fetchData().subscribe(data => this.myData = data);
	}

}
