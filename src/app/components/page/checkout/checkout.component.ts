import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { OthenavComponent } from '../../partial/othenav/othenav.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl, 
  EmailValidator
} from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { CheckoutModel } from 'src/app/Model/checkout-model';
import { CheckoutModelItem } from 'src/app/Model/checkout-model-item';
import { Cart } from 'src/app/Model/cart';
import { Setting } from 'src/app/Model/setting';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  olduser=false;
  
  user=new User();
  // checkout datas
    phone:string="";
    fname:string="";
    lname:string="";
    email:string="";
    address:string="";
    password:string="";
    repass:string="";
    extramessage:string="";
    
  constructor(private formBuilder: FormBuilder,private loader:LoaderService,public scrolle:ScrollserviceService,public cartservice:CartService,private client:ApiService,public auth:AuthserviceService,public router:Router) { 
      console.log('user loaded via constructor');
      this.setuser();

      this.auth.authSet.subscribe((data)=>{
        this.setuser();
        console.log('user loaded via emit');
      })
  }
  @ViewChild('navbar') navbar:OthenavComponent
  ngOnInit() {
    this.setuser();
    console.log('user loaded via olddata');

  }
  ionViewWillEnter(){
    console.log("view enter");
    console.log('user loaded view enter');
    this.setuser();
  }

  setuser(){
    if(this.auth.logged){
      console.log(this.auth.user,"checking auth user");
      this.phone=this.auth.user.phone;
      this.fname=this.auth.user.fname;
      this.lname=this.auth.user.lname;
      this.email=this.auth.user.email; 
      this.address=this.auth.user.address;
      console.log(this.phone,this.fname,this.lname,this.email,this.address,"local variable checked");
    }
  }

 
  gotoLogin(){
    this.auth.redirect="/checkout";
    this.auth.prevurl="/checkout";
    this.router.navigate(['/login']);
  }

  signupAndCheckout(){
    if(this.validate()){
      this.auth.signupstart.subscribe((res)=>{

        this.loader.show(true);
      })
      this.auth.signupsucceeded.subscribe((res)=>{
        this.checkout();
      });

      this.auth.signupfailed.subscribe((res:any)=>{
        alert(res.error.message);
        this.loader.show(false);
      })

      this.auth.signup({
        phone:this.phone,
        address:this.address,
        email:this.email,
        fname:this.fname,
        lname:this.lname,
      });
      console.log('signup started');
    }
  } 

  checkout(){
      var obj=new CheckoutModel();
      obj.email=this.email;
      obj.name=this.fname+" "+this.lname;
      obj.streetaddress=this.address;
      obj.phone=this.phone;
      obj.order_message=this.extramessage;
      let items:CheckoutModelItem[]=[]
      this.cartservice.items.forEach((element:Cart) => {
        let item=new CheckoutModelItem();
        item.id=element.id;
        item.qty=element.qty;
        item.rate=element.price;
        item.variant_code=element.variant=="none"?null:element.variant;
        items.push(item );
      });
      obj.items=items;
      console.log("checkout object",obj);
      
      this.client.postWithAuth(Setting.apiurl+"booking/checkout",obj).subscribe((res)=>{
          this.cartservice.emptyCart();
          this.router.navigate(['/user']);
      }, 
      (err)=>{
        alert('error');
      })
  }

  validate(){
    console.log(this);
    if(this.phone.length!=10 ){
      alert("Please Enter Correct Phone no");
      return false;
    }
    if(this.fname==""){
      alert("please Add First Name");
      return false;
    }
    if(this.lname==""){
      alert("please Add Last Name");
      return false;
    }

    if(this.address=="" || this.address.length<6){
      alert("please Add address");
      return false;
    }

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
    if(this.email=="" || !regexp.test(this.email)){
      alert("please Enter Proper Email");
      return false;
    }

    if(!this.auth.logged){
      if(this.password=="" ){
        alert("please Enter Password");
        return false;
      }

      if(this.password!=this.repass){
        alert("please comfirm Password");
        return false;
      }
    }

    return true;
  }
}
