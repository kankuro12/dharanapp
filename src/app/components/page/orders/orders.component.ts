import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { OthenavComponent } from '../../partial/othenav/othenav.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  title="";
  orderTypes=["Pending","Processing","shipped","","completed"];
  type:string;
  orders:any;
  @ViewChild('navbar') navbar:OthenavComponent
  constructor(private route:ActivatedRoute,private client:ApiService) { }

  ngOnInit() {
    this.type=this.route.snapshot.paramMap.get('status');
    this.title="Orders - "+this.orderTypes[ Number(this.type)];
    this.client.getWithAuth(Setting.apiurl+"booking/orders/"+this.type)
    .subscribe((res:any)=>{
        this.orders=res;
        console.log(res);
    });
  }

}
