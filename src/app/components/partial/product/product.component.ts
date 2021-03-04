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

  managefav(id){
    this.fav.addFav(id);
    this.liked=this.fav.favs.includes(this.product.id);

  }
  ngOnInit(): void {
    this.liked=this.fav.favs.includes(this.product.id);
  }

}
