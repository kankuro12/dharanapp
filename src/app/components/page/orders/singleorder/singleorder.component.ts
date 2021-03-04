import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Setting } from 'src/app/Model/setting';

@Component({
  selector: 'app-singleorder',
  templateUrl: './singleorder.component.html',
  styleUrls: ['./singleorder.component.scss'],
})
export class SingleorderComponent implements OnInit {
  url=Setting.url;
  detailshow=false;
  detailtext="Show Detail";
  @Input()order:any;
  constructor() { }

  ngOnInit() {
    console.log('single order initiated'); 
  }

  toogleDetail(){
    this.detailshow=!this.detailshow;
    if(this.detailshow){
      this.detailtext="Hide Details";
    }else{
      this.detailtext="Show Details";

    }
  }
}
