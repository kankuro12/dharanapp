import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setting } from '../Model/setting';
import { ApiService } from './api.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products:any[]=[];
  hasmoredata=true;
  step=0;
  lock=false;
  constructor(private client :ApiService,private loader:LoaderService) {

    this.loadData();
   }

  loadData(){
    if(this.hasmoredata && !this.lock){
        this.lock=true;
        this.client.get(Setting.apiurl+ 'listproducts/'+this.step).subscribe((data:any)=>{
          this.hasmoredata=data.hasmore;
          this.products=this.products.concat(data.products);
          this.step+=1;
          this.lock=false;
        });
    }
  }
  
}
