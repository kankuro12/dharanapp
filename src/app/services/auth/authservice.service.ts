import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { User } from 'src/app/Model/user';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  prevurl="/user";
  redirect:string="/user";
  signupredirecturl="/login";
  authenticated:false;
  username:string="";
  user:User;
  token="";
  logged=false;
  signupstart:EventEmitter<any>=new EventEmitter<any>();
  signupfailed:EventEmitter<any>=new EventEmitter<any>();
  signupsucceeded:EventEmitter<any>=new EventEmitter<any>();
  
  authSet:EventEmitter<any>=new EventEmitter<any>();
  constructor(private router: Router,private client :ApiService) { 
    
    if (localStorage.getItem('access_token')){
      this.token=localStorage.getItem('access_token');
      this.client.updateToken(this.token);
        this.client.getWithAuth(Setting.apiurl+ 'auth/user').
        subscribe((res:any)=>{
          this.user=new User();
          this.user.fname=res.acc.fname;
          this.user.lname=res.acc.lname;
          this.user.address=res.acc.address;
          this.user.phone=res.acc.mobile_number;
          this.user.email=res.user.email;
          this.logged=true;
          console.log(this.user);
          this.authSet.emit(null);
        });
    }

  }

  canActivate(ext: ActivatedRouteSnapshot,ate: RouterStateSnapshot  ) {
    if(!this.logged){
      this.redirect=ate.url;
      this.router.navigate(['/login']);
    }
    return true;
  }

  login(){

  }

  signup(data){
    this.signupstart.emit(null);
     this.client.post(Setting.apiurl+ 'auth/signup',data) 
    .subscribe((res:any)=>{
      console.log(res);
      if(res.status){
        localStorage.setItem('access_token',res.token);
        this.token=res.token;
        this.user=new User();
        this.user.fname=res.acc.fname;
        this.user.lname=res.acc.lname;
        this.user.address=res.acc.address;
        this.user.phone=res.acc.mobile_number;
        this.user.email=res.user.email;
        this.client.updateToken(this.token);
        this.logged=true;
        this.signupsucceeded.emit(res);
      }else{
        this.signupfailed.emit(res);
      }
    },
    (err)=>{
      console.log(err);
      this.signupfailed.emit(err);
    });
   
  }

  loginWithPhone(data){
    this.signupstart.emit(null);
    this.client.post(Setting.apiurl+ 'auth/loginbyphone',data) 
   .subscribe((res:any)=>{
     console.log(res);
     if(res.status){
       localStorage.setItem('access_token',res.token);
       this.token=res.token;
       this.user=new User();
       this.user.fname=res.acc.fname;
       this.user.lname=res.acc.lname;
       this.user.address=res.acc.address;
       this.user.phone=res.acc.mobile_number;
       this.user.email=res.user.email;
       this.client.updateToken(this.token);
       this.logged=true;
       this.signupsucceeded.emit(res);
     }else{
       this.signupfailed.emit(res);
     }
   },
   (err)=>{
     console.log(err);
     this.signupfailed.emit(err);
   });
  }

  logOut(){
    localStorage.removeItem('access_token');
    this.logged=false;
    this.user=null;
  }
}
