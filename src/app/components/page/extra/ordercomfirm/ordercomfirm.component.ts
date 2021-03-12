import { Component, OnInit } from '@angular/core';
import { OrdercacheService } from 'src/app/services/extra/ordercache.service';

@Component({
  selector: 'app-ordercomfirm',
  templateUrl: './ordercomfirm.component.html',
  styleUrls: ['./ordercomfirm.component.scss'],
})
export class OrdercomfirmComponent implements OnInit {

  order:any;
  constructor(private ordercache:OrdercacheService) {
    this.order=this.ordercache.order;
   }

  ngOnInit() {}

}
