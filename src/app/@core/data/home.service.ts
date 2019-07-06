// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

    public employees = [];
  constructor(private http: HttpClient) { }

    data(success) {
     return this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((tot) => {
      success(tot);
    });
}
}

