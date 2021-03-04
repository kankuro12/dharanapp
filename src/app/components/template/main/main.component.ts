import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { MobilenavComponent } from '../../partial/mobilenav/mobilenav.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private scrollevent:ScrollserviceService) { }

  @ViewChild('navbar') navbar:MobilenavComponent
  topped:boolean=false;
  ngOnInit() {}
  scroll(event){
    this.topped=event.srcElement.scrollTop>40;
    this.navbar.istop=this.topped;
    // console.log("from main",event.srcElement.scrollTop);
    // this.scrollevent.set(event.srcElement.scrollTop);
  }
}
