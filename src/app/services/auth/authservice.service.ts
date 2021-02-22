import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  authenticated:false;
  username:string="";
  constructor(private router: Router,private client :HttpClient) { 
    this.client.get('https://www.meroemart.com/auth/user')
    if (localStorage.getItem('access_token')){
    }

  }

  canActivate(ext: ActivatedRouteSnapshot,ate: RouterStateSnapshot  ) {
    if (localStorage.getItem('access_token')) { 
      return true; 
    }else{
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
