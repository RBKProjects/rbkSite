import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(private http : Http, private authHttp : AuthHttp ) { }


   getques() {
     let params;///here we will put the test id

     if(Number(localStorage.getItem('progress'))==3){
      params = "5937ffe3d5da9221c05540ac";
     }else if(Number(localStorage.getItem('progress'))==4) {
      params = "594043476903a618d4b1bb86";

     }
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.authHttp.get('api/test/questions/getques/'+ params +"/"+localStorage.getItem('user-id'), {headers: headers})
      .map(res => res.json());
     }

  sendanswer(data) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.authHttp.post('api/test/answer/addAnswer',data, {headers: headers})
      .map(res => res.json());
     }

}
