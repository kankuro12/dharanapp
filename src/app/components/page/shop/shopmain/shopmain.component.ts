import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductgroupComponent } from 'src/app/components/partial/productgroup/productgroup.component';
import { LoaderService } from 'src/app/services/loader.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shopmain',
  templateUrl: './shopmain.component.html',
  styleUrls: ['./shopmain.component.scss'],
})
export class ShopmainComponent implements OnInit {

  @ViewChild('products') products: ElementRef;
  @ViewChild('anchor') pageInfo: ElementRef; 

  ontop:boolean=false;
  catshow:boolean=false;
  constructor(private scrollservice:ScrollserviceService,public shop:ShopService,private loader:LoaderService) {

      this.scrollservice.scrollEvent.subscribe(data=>{
        this.scrolled(data);
        console.log(data,window.innerHeight,this.products.nativeElement.offsetHeight);
      });
  }
  counter(i: number) {
    return new Array(i);
  }
  goToPage(_page:number){
    const targetElement = this.pageInfo.nativeElement;
    targetElement.scrollIntoView({behavior: "auto"});
    this.shop.paginate(_page);
  }
  prev(){
    if(this.shop.canprev){
      this.goToPage(this.shop.page-1);
    }
  }

  next(){
    if(this.shop.cannext){
      this.goToPage(this.shop.page+1);
    }
  }

  ngAfterViewInit()	{
    console.log('after view init');
    this.loader.show(false);
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
  top(e){
    console.log(e);
  }
  scrolled(top){
      this.ontop=top>120;
      // console.log(this.ontop,this.products.nativeElement.offsetHeight,top+(window.innerHeight*1.5));
      // if((top+(window.innerHeight*1.5))>this.products.nativeElement.offsetHeight){
      //   if(this.shop.hasmoredata){
      //     this.shop.loadData();
      //   }
      // }
  }
}
