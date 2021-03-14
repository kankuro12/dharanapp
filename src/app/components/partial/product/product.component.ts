import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { Setting } from 'src/app/Model/setting';
import {FavService} from 'src/app/services/fav.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  url=Setting.url;
  liked:boolean=false;
  @Input() product:Product;
  constructor(public fav:FavService) { }

  managefav(id,name,image){
    this.fav.addFav(id,name,image);
    this.liked=this.fav.includes(this.product.id);

  }
  ngOnInit(): void {
    this.liked=this.fav.includes(this.product.id);
  }

}
