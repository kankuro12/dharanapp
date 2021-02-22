import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers:HttpHeaders;

  constructor(public client:HttpClient) { 
    this.headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('accept', 'application/json')
    .append('xpsu', '123456');
    console.log(this.headers);
    
    
  }

  
  get(url){
    return this.client.get(url,{headers:this.headers});
  }
  post(url,data){
    return this.client.post(url,data,{headers:this.headers});

  }
}
