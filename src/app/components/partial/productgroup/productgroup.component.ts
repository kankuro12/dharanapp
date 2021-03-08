import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.scss']
})
export class ProductgroupComponent implements OnInit {

  @Input()products:any[]=[];
  constructor(public elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  trackBy(index: number, name: Product): number {
    return name.id;
  }
}
