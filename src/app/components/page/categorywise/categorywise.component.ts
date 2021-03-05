import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { CategorytitleService } from 'src/app/services/categorytitle.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';
import { OthenavComponent } from '../../partial/othenav/othenav.component';

@Component({
  selector: 'app-categorywise',
  templateUrl: './categorywise.component.html',
  styleUrls: ['./categorywise.component.scss'],
})
export class CategorywiseComponent implements OnInit {
  url=Setting.url;
  topped=false;
  constructor(public client: ApiService,private router:Router, private route: ActivatedRoute,public scrolle:ScrollserviceService,public cattitle:CategorytitleService,private loader:LoaderService) { }
  products:Product[]=[];
  id:any;
  
  @ViewChild('navbar') navbar:OthenavComponent
  ngOnInit() {
    this.loader.show(true);
    this.id = this.route.snapshot.paramMap.get('id');
    this.client.get(Setting.apiurl+"category/"+this.id).subscribe((res:any)=>{
      let p:Product[]=[];
      res.forEach((pp:any) => {
        let pi=new Product();
        pi.name=pp.product_name;
        pi.id=pp.product_id;
        pi.onsale=pp.onsale;
        pi.newrate=pp.mark_price;
        pi.oldrate=pp.mark_price;
        pi.image=this.url+pp.product_images;
        p.push(pi);
      });
      this.products = p;
      console.log(this.products);
      this.loader.show(false);

    });
  }

  scroll(event){
    this.topped=event.srcElement.scrollTop>40;
    this.navbar.istop=this.topped;
    console.log("from main",event.srcElement.scrollTop);
    this.scrolle.set(event.srcElement.scrollTop);
  }
}
