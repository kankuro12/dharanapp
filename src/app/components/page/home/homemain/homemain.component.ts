import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-homemain',
  templateUrl: './homemain.component.html',
  styleUrls: ['./homemain.component.scss'],
})
export class HomemainComponent implements OnInit {

  constructor(public service:HomepageService,private loader:LoaderService) { }

  ngOnInit(): void {
    // this.service.loadProduct();
    // this.service.loadSlider();
  }

  ngAfterViewInit()	{
    console.log('after view init');
    this.loader.show(false);
  }
}
