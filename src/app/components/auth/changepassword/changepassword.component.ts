import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  visible=false;
  constructor() { }

  ngOnInit() {}

  show(){
    this.visible=true;
  }
  hide(){
    this.visible=false;

  }
}
