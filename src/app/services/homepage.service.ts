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
  sliders:any[]=[];
  url=Setting.url;

  constructor(private client:ApiService) {
    this.loadProduct();
    this.loadSlider();
   }
  loaded = false;

  loadProduct(){
    if (!this.loaded) {
      this.client.get(Setting.apiurl+ 'products').subscribe((response:any)=>{
        response.forEach(pg => {
          let npg=new ProductGroup();
          npg.title=pg.title;
          let npgitems:Product[]=[];
          pg.products.forEach((pp:any) => {
            let pi=new Product();
            pi.name=pp.product_name;
            pi.id=pp.product_id;
            pi.onsale=pp.onsale;
            pi.newrate=pp.mark_price;
            pi.oldrate=pp.mark_price;
            pi.image=this.url+pp.product_images;
            npgitems.push(pi);
          });
          npg.products=npgitems;
          this.products.push(npg);
        });
        console.log(this.products);
      });
    }
  }

  loadSlider(){
    if (!this.loaded) {
      this.client.get(Setting.apiurl+ 'sliders').subscribe((response:any)=>{
        this.sliders=response;
      });

    }
  }
}
