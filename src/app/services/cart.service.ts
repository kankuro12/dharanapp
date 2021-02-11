import { Injectable } from '@angular/core';
import { Cart } from '../Model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item=0;
  items:Cart[]=[];
  constructor() { }
}
