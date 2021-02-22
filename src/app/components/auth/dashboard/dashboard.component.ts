import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { ViewedService } from 'src/app/services/viewed.service';
import { OthenavComponent } from '../../partial/othenav/othenav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public scrolle:ScrollserviceService,public authservice:AuthserviceService,public viewservice:ViewedService) { }
  topped=false;
  @ViewChild('navbar') navbar:OthenavComponent
  ngOnInit() {}

  scroll(event){
    this.topped=event.srcElement.scrollTop>40;
    this.navbar.istop=this.topped;
    console.log("from main",event.srcElement.scrollTop);
    this.scrolle.set(event.srcElement.scrollTop);
  }


}
