import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  fname="";
  lname="";
  address="";
  constructor(private auth:AuthserviceService,private client:ApiService) {
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
}
