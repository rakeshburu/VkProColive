// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../@core/data/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public employeelist = [];
  data: any;
  constructor(private service: HomeService) { }
  ngOnInit() {
     this.service.data((tot) => {
    this.employeelist = tot;
    console.log(tot);
  });
  }
}
