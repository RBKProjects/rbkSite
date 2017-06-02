import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService {

  constructor(private http : Http ) { }


   getques() { 
     let params="592ec314c90b102090df3104";
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get('api/test/questions/getques/'+ params, {headers: headers})
      .map(res => res.json());
     }

}
