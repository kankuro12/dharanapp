import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';

@Component({
  selector: 'app-othenav',
  templateUrl: './othenav.component.html',
  styleUrls: ['./othenav.component.scss'],
})
export class OthenavComponent implements OnInit {
 istop=false;
  @Input()backshow:boolean=true;
  @Input()title:string;
  constructor(private scroll:ScrollserviceService,public location: Location) { 

    this.scroll.scrollEvent.subscribe((data)=>{
      console.log(data);
    });
  }

  
  back() {

    console.log('back');
    this.location.back();
  }

  ngOnInit() {}

}
