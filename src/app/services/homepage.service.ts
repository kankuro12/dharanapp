import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  products:any[]=[];
  sliders:any[]=[];
  constructor(private client:ApiService) {
    this.loadProduct();
    this.loadSlider();
   }
  loaded = false;

  loadProduct(){
    if (!this.loaded) {
      this.client.get('https://meroemart.com/api/products').subscribe((response:any)=>{
        this.products=response;
        console.log(this.products);
      });
    }
  }

  loadSlider(){
    if (!this.loaded) {
      this.client.get('https://meroemart.com/api/sliders').subscribe((response:any)=>{
        this.sliders=response;
      });

    }
  }
}
