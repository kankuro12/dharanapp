import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductgroupComponent } from 'src/app/components/partial/productgroup/productgroup.component';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shopmain',
  templateUrl: './shopmain.component.html',
  styleUrls: ['./shopmain.component.scss'],
})
export class ShopmainComponent implements OnInit {

  @ViewChild('products') products: ElementRef;
  ontop:boolean=false;
  catshow:boolean=false;
  constructor(private scrollservice:ScrollserviceService,public shop:ShopService) {

      this.scrollservice.scrollEvent.subscribe(data=>{
        this.scrolled(data);
        console.log(data,window.innerHeight,this.products.nativeElement.offsetHeight);
      });
  }

  ngOnInit() {
    this.shop.loadData();
  }
  Scroll(event){
    console.log(event);
  }

  tooglecat(){
    this.catshow=!this.catshow;
  }
  scrolled(top){
      this.ontop=top>120;
      console.log(this.ontop);
      if((top+(window.innerHeight*1.5))>this.products.nativeElement.offsetHeight){
        if(this.shop.hasmoredata){

          this.shop.loadData();
        }
      }
  }
}
