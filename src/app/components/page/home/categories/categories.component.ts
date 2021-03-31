import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  url=Setting.url;
  constructor(public cat:CategoryService) { }
  ngOnInit() {
  
  }

}
