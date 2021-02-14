import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mobilefooter',
  templateUrl: './mobilefooter.component.html',
  styleUrls: ['./mobilefooter.component.scss'],
})
export class MobilefooterComponent implements OnInit {

  constructor(public cart:CartService) { }

  ngOnInit() {}

}
