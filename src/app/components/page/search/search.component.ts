import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchparam:string="";
  products:Product[]=[];
  url=Setting.url;
  constructor(private client :ApiService,private location:Location) {

   }

   back(){
     this.location.back();
   }
  ngOnInit() {}

  search(){
    if(this.searchparam.length>2){
      this.client.post(Setting.apiurl+"search",{'keyword':this.searchparam})
      .subscribe((res:any)=>{
        let p:Product[]=[];
      res.forEach((pp:any) => {
        let pi=new Product();
        pi.name=pp.product_name;
        pi.id=pp.product_id;
        pi.onsale=pp.onsale;
        pi.newrate=pp.mark_price;
        pi.oldrate=pp.mark_price;
        pi.image=this.url+pp.product_images;
        p.push(pi);
      });
      this.products = p;
      console.log(this.products);
      })
    }
  }
}
