import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  @Input()item:any;
  image:string="";
  constructor() { }

  ngOnInit() {
    this.image=Setting.url+this.item.ad.image;
  }

}
