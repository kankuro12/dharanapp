import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pforgot',
  templateUrl: './pforgot.component.html',
  styleUrls: ['./pforgot.component.scss'],
})
export class PforgotComponent implements OnInit {

  phone="9800916365"
  constructor(private client:ApiService,private router :Router) { }

  ngOnInit() {}

  close(){
    this.router.navigate(['/login']);
  }

  sendResetCode(){
    this.client.post(Setting.apiurl+"auth/forgotpasswordPhone",{"phone":this.phone})
    .subscribe((res)=>{
      this.router.navigate(['/reset'])
    })
  }
}
