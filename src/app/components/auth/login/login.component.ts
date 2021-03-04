import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private auth:AuthserviceService, private router:Router,private formBuilder:FormBuilder,private loader:LoaderService) { 
    if(this.auth.logged){
      this.router.navigate([this.auth.redirect]);
    }
    this.auth.signupstart.subscribe((res)=>{
        this.loader.show(true);
    });
    this.auth.signupsucceeded.subscribe((res)=>{
      this.loader.show(false);
      this.router.navigate([this.auth.redirect]);
    });
    this.auth.signupfailed.subscribe((res)=>{
      alert('login Failed Try again');
      this.loader.show(false);
    });
    this.auth.authSet.subscribe((res)=>{

        this.router.navigate([this.auth.redirect]);
    });
  }
  ionViewWillEnter(){
    console.log("view enter");
    console.log('user loaded view enter');
    if(this.auth.logged){
      this.router.navigate(['/user']);

    }
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
        phone:[null,[Validators.required,Validators.minLength(10)]],
        password:[null,Validators.required]
    });
  }

  login(){
    if(this.form.valid){
      console.log(this.form.value)
      this.auth.loginWithPhone(this.form.value);
    }
  }
  close(){
    var temp=this.auth.prevurl;
    this.auth.prevurl="/user";
    this.router.navigate([temp]);
  }

  gotoSignUp(){
    this.auth.signupredirecturl="/login";
    this.router.navigate(["/signup"]);
  }

}
