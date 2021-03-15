import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  visible=false;
  cpass="";
  npass="";
  repass="";
  constructor(private client :ApiService) { }

  ngOnInit() {}

  show(){
    this.visible=true;
  }
  hide(){
    this.visible=false;

  }
  update(){
    if(this.cpass==""){
      alert('Please Enter Old Password');
      return;
    }
    if(this.npass==""){
      alert('Please Enter New Password');
      return;
    }
    if(this.npass!=this.repass){
      alert('Please Confirm new password');
      return ;
    }
    this.client.postWithAuth(Setting.apiurl+"auth/changepass",{password:this.cpass,newpassword:this.npass})
    .subscribe((res:any)=>{
      if(res.status){
          alert('password Changed Sucessfully');
          this.cpass="";
          this.npass="";
          this.repass="";
          this.visible=false;
      }else{
        alert('res.message');
      }
    });
  }

}
