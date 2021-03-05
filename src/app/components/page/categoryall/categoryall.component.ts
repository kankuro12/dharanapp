import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { CategorytitleService } from 'src/app/services/categorytitle.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { OthenavComponent } from '../../partial/othenav/othenav.component';

@Component({
  selector: 'app-categoryall',
  templateUrl: './categoryall.component.html',
  styleUrls: ['./categoryall.component.scss'],
})
export class CategoryallComponent implements OnInit {
  categories:any[]=[];
  
  constructor(public scrolle:ScrollserviceService,public client:ApiService,private router:Router,public cattitle:CategorytitleService) { }
  @ViewChild('navbar') navbar:OthenavComponent
  ngOnInit() {
    this.client.get(Setting.apiurl+'categories').subscribe((response:any)=>{
      this.categories=response;
    });
  }

  loadProducts(cat:any){
    this.cattitle.name=cat.cat_name;
    console.log(this.cattitle.name)
    this.router.navigate(['/category/'+cat.cat_id]);
  }

  


}
