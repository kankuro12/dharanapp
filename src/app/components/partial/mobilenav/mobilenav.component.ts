import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
})
export class MobilenavComponent implements OnInit {

  constructor() { }
  istop=false;
  ngOnInit() {}
  
  top(val){
    this.istop=val;
  }
}
