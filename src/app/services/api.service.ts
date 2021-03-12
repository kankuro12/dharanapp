import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers:HttpHeaders;
  authheaders:HttpHeaders;
  token="";
  constructor(public client:HttpClient) { 
    this.headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('accept', 'application/json')
    .append('xpsu', '123456');
    console.log(this.headers);
    this.authheaders=this.headers.append("Authorization","Bearer "+this.token);
  }

  updateToken(_token){
    this.token=_token;
    this.authheaders=this.headers.append("Authorization","Bearer "+this.token);
    console.log("auth header set",this.authheaders);
  }

  
  get(url){
    return this.client.get(url,{headers:this.headers});
  }
  post(url,data){
    return this.client.post(url,data,{headers:this.headers});

  }
  postFile(url,data:FormData){
    let fileheaders = new HttpHeaders()
    .append('Content-Type', 'multipart/form-data')
    .append('accept', 'application/json')
    .append('xpsu', '123456');
    return this.client.post(url,data,{headers:fileheaders});

  }

  getWithAuth(url){
    
    return this.client.get(url,{headers:this.authheaders});
  }
  postWithAuth(url,data){
    return this.client.post(url,data,{headers:this.authheaders});

  }
  postFileWithAuth(url,data:FormData){
    let fileheaders = new HttpHeaders()
    // .append('Content-Type', 'multipart/form-data')
    // .append('accept', 'application/json')
    .append('xpsu', '123456')
    .append("Authorization","Bearer "+this.token);
    return this.client.post(url,data,{headers:fileheaders});

  }
}
