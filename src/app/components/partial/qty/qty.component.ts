import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qty',
  templateUrl: './qty.component.html',
  styleUrls: ['./qty.component.scss']
})
export class QtyComponent implements OnInit {

  constructor() { }
  qty:number=1;
  @Input()max:number
  ngOnInit(): void {
  }

  addQty(num){
    let _max=parseFloat(this.max.toString());
    this.qty+=parseFloat( num);
    if(this.qty<1){
      this.qty=1;
    }

    console.log(this.qty,num);

    if(this.qty >_max){

      this.qty=_max;
    }
  }

}
