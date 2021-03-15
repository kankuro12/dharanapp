import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from './api.service';
import { Setting } from '../Model/setting';
import { ProductGroup } from '../Model/productgroup';
import { Product } from '../Model/product';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  products:ProductGroup[]=[];
  sections:any[]=[];
  sliders:any[]=[];
  url=Setting.url;

  constructor(private client:ApiService) {
    this.loadHomePage();
    this.loadSlider();
   }
  loaded = false;

  loadHomePage(){
    if(!this.loaded){
      this.client.get(Setting.apiurl+ 'homepage').subscribe((response:any[])=>{
        this.sections=response;
        console.log(this.sections);
        this.loaded=true;
      });
    }
  }
  // loadProduct(){
  //   if (!this.loaded) {
  //     this.client.get(Setting.apiurl+ 'products').subscribe((response:any)=>{
  //       response.forEach(pg => {
  //         let npg=new ProductGroup();
  //         npg.title=pg.title;
  //         let npgitems:Product[]=[];
  //         pg.products.forEach((pp:any) => {
  //           let pi=new Product();
  //           pi.name=pp.product_name;
  //           pi.id=pp.product_id;
  //           pi.onsale=pp.onsale;
  //           pi.newrate=pp.mark_price;
  //           pi.oldrate=pp.mark_price;
  //           pi.image=this.url+pp.product_images;
  //           npgitems.push(pi);
  //         });
  //         npg.products=npgitems;
  //         this.products.push(npg);
  //       });
  //       console.log(this.products);
  //       this.loaded=true;
  //     });
  //   }
  // }

  loadSlider(){
    
      this.client.get(Setting.apiurl+ 'sliders').subscribe((response:any)=>{
        this.sliders=response;
      });

  }
}
