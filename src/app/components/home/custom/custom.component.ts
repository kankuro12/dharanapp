import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  products:Product[]=[];
  @Input()item:any;
  constructor() { }

  ngOnInit() {
    let tempproducts=[];

    this.item.products.forEach(element => {
      let pi=new Product();
      pi.set(element);
      tempproducts.push(pi);
    });
    this.products=tempproducts;
  }

}
