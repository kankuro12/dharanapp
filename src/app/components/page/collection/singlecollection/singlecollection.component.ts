import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { settings } from 'cluster';
import { Product } from 'src/app/Model/product';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-singlecollection',
  templateUrl: './singlecollection.component.html',
  styleUrls: ['./singlecollection.component.scss'],
})
export class SinglecollectionComponent implements OnInit {
  id:string;
  coll:any;
  products:Product[]=[];
  url=Setting.url;
  constructor(private loader: LoaderService,
    public client: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.client.get(Setting.apiurl+"collection/"+this.id)
    .subscribe((res:any)=>{
      this.coll=res;
      console.log(res);
      let tempproducts:Product[]=[];
     
      this.coll.products.forEach(o=>{
          let pi=new Product();
          pi.set(o);
          tempproducts.push(pi);
      })
      this.products=tempproducts;
      this.loader.show(false);
    });
  }

}
