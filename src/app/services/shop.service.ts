import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { Setting } from '../Model/setting';
import { ApiService } from './api.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products:Product[]=[];
  hasmoredata=true;
  step=0;
  lock=false;
  url=Setting.url;
  allproducts=[];
  page=1;
  totalpages=0;
  cannext=false;
  canprev=false;
  constructor(private client :ApiService,private loader:LoaderService) {
    this.loadData();
   }

  // loadData(){
  //   if(this.hasmoredata && !this.lock){
  //       this.lock=true;
  //       this.client.get(Setting.apiurl+ 'listproducts/'+this.step).subscribe((data:any)=>{
  //         let p:Product[]=[];
  //         data.products.forEach((pp:any) => {
  //           let pi=new Product();
  //           pi.name=pp.product_name;
  //           pi.id=pp.product_id;
  //           pi.onsale=pp.onsale;
  //           pi.newrate=pp.newprice;
  //           pi.oldrate=pp.mark_price;
  //           pi.image=this.url+pp.product_images;
  //           p.push(pi);
  //         });
  //         this.hasmoredata=data.hasmore;
  //         this.products=this.products.concat(p);
  //         this.step+=1;
  //         this.lock=false;
  //       });
  //   }
  // }

  loadData(){
    if(this.hasmoredata && !this.lock){
        this.lock=true;
        this.client.get(Setting.apiurl+ 'allproducts').subscribe((data:any)=>{
          let p:Product[]=[];
          data.forEach((pp:any) => {
            let pi=new Product();
            pi.name=pp.product_name;
            pi.id=pp.product_id;
            pi.onsale=pp.onsale;
            pi.newrate=pp.newprice;
            pi.oldrate=pp.mark_price;
            pi.image=this.url+pp.product_images;
            p.push(pi);

          });
          this.hasmoredata=data.hasmore;
          this.allproducts=this.products.concat(p);
          this.totalpages=Math.trunc( this.allproducts.length/24);
          this.totalpages+=this.allproducts.length % 24>0?1:0;
          this.paginate(0);
        });
    }
  }

  paginate(_page:number){
    
    this.products=this.allproducts.slice((_page)*24,(_page+1)*24);
    this.page=_page;
    this.cannext= this.page<this.totalpages-1;
    this.canprev= this.page>0;
  }

 
  
}
