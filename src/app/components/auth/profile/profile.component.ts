import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  fname="";
  lname="";
  address="";
  tempfname="";
  templname="";
  tempaddress="";
  initedit=false;
  @ViewChild('changepass') changepass:ChangepasswordComponent
  constructor(private auth:AuthserviceService,private client:ApiService,private router:Router) {
    this.auth.authSet.subscribe(data=>{
      this.fname=this.auth.user.fname;
      this.lname=this.auth.user.lname;
      this.address=this.auth.user.address;
    });
    if(this.auth.logged){
      this.fname=this.auth.user.fname;
      this.lname=this.auth.user.lname;
      this.address=this.auth.user.address;
    }
   }

  ngOnInit() {}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      console.log(event.target.result);
      this.auth.user.image=event.target.result;
      
      let fd=new FormData();
      fd.append('image',file)
      this.client.postFileWithAuth(Setting.apiurl+"auth/ProfileImage",fd)
      .subscribe((res:any)=>{

      });

     
    });

    reader.readAsDataURL(file);
  }

  showEdit(){
    this.initedit=true;
    this.tempfname=this.fname;
    this.templname=this.lname;
    this.tempaddress=this.address;
  }

  closeEdit(){
    this.initedit=false;
    this.fname=this.tempfname;
    this.lname=this.templname;
    this.address=this.tempaddress;
  }

  update(){
    this.client.postWithAuth(Setting.apiurl+"auth/updateUserInfo",{fname:this.fname,lname:this.lname,address:this.address})
    .subscribe((res)=>{
      alert('Info Updated Sucessfully');
      this.initedit=false;
      this.auth.user.fname=this.fname;
      this.auth.user.lname=this.lname;
      this.auth.user.address=this.address;
    })
  }
  logout(){
    this.auth.logOut();
    this.router.navigate(['/user']);
  }
  showChangePass(){
    this.changepass.show();
  }
}
