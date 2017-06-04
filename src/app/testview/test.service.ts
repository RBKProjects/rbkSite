import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService {

  constructor(private http : Http ) { }


   getques() { 
     let params="5934067bea76ce20d0c33641";///here we will put the test id
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('api/test/questions/getques/'+ params +"/"+localStorage.getItem('user-id'), {headers: headers})
      .map(res => res.json());
     }

  sendanswer(data) { 
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('api/test/answer/addAnswer',data, {headers: headers})
      .map(res => res.json());
     }

}
