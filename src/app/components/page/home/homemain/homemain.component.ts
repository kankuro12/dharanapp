import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-homemain',
  templateUrl: './homemain.component.html',
  styleUrls: ['./homemain.component.scss'],
})
export class HomemainComponent implements OnInit {

  constructor(public service:HomepageService) { }

  ngOnInit(): void {
    this.service.loadProduct();
    this.service.loadSlider();
  }

}
