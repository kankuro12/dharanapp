import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Setting } from 'src/app/Model/setting';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input()item:any;
  images:string[]=[];
  customOptions: OwlOptions = {
    loop: false,
    items: 1,
    dots: true,
    autoHeight: true,
  };
  constructor() { }

  ngOnInit() {
  let temparr=[];
    this.item.sliders.forEach(element => {
      temparr.push(Setting.url+element.image);
    });
    this.images=temparr;
  }

}
