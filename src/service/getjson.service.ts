import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/assets/user';

@Injectable({
  providedIn: 'root'
})
export class GetjsonService {

  constructor(private http: HttpClient) { 
    // console.log("json service called");
  }
  getvaluefromjson(){
    return this.http
    .get<any>('assets/user.json')
      
}
}
