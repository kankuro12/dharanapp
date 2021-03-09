import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss'],
})
export class PresetComponent implements OnInit {
  phone:string="";
  token:string="";
  password:string="";
  retypepassword:string="";
  constructor(private client: ApiService, private router: Router) { }
  lock=false;
  ngOnInit() { }

  close() {
    this.router.navigate(['/forgot']);
  }

  validate(){
    if(this.phone.length!=10){
      alert("Please Ente Proper Phone no");
      return false;
    }

    if(this.token==""){
      alert("Please Enter Token");
      return false;
    }
    if(this.password.length<6){
      alert("Please Enter Password Longer than 6 letters");
      return false;
    }
    if(this.password!=this.retypepassword){
      alert("Please comfirm password");
      return false;
    }
    return true;
  }

  resetPassword(){
    if(!this.lock){

      if(this.validate()){
        this.lock=true;
        this.client.post(Setting.apiurl+"auth/resetpasswordPhone",{
          phone:this.phone,
          token:this.token,
          password:this.password
        }).subscribe((res:any)=>{
          this.lock=false;
          if(res.status){
            this.router.navigate(['/login']);
          }else{
            alert(res.message);
          }
        },
        (err)=>{
          this.lock=false;
          alert('Cannot Reset Password,Connection Lost');
        })
        
      }
    }
  }
}
