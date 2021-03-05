import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/Model/cart';
import { CartService } from 'src/app/services/cart.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { OthenavComponent } from '../../partial/othenav/othenav.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
 
  constructor(public cartservice:CartService) { }
  @ViewChild('navbar') navbar:OthenavComponent
  ngOnInit() {}

  

  changed(data:Cart){
    this.cartservice.changeQty(data.qty,data.ident);
  }

  delete(data:Cart){
    console.log('on cart window');
    this.cartservice.remove(data.ident);
  }
}
