import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products:any[]=[];
  hasmoredata=true;
  step=0;
  lock=false;
  constructor(private client :ApiService) {

    this.loadData();
   }

  loadData(){
    if(this.hasmoredata && !this.lock){
        this.lock=true;
        this.client.get('https://www.meroemart.com/api/listproducts/'+this.step).subscribe((data:any)=>{
          this.hasmoredata=data.hasmore;
          this.products=this.products.concat(data.products);
          this.step+=1;
          this.lock=false;
        });
    }
  }
  
}
