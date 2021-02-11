import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Variant } from 'src/app/Model/variant';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FavService } from 'src/app/services/fav.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  recs:any[]=[];
  images: string[] = [];
  public innerWidth: any;
  price = 0;
  oldprice = 0;
  stock = 0;
  product: any;
  id: string;
  variantstock: any;
  variants: Variant[] = [];
  customOptions: OwlOptions = {
    loop: false,
    items: 1,
    dots: true,
    autoHeight: true
  };
  active: boolean = false;
  constructor(public client: HttpClient, private route: ActivatedRoute, public fav: FavService, public location: Location) {



  }

  back() {
    console.log('back');
    this.location.back();
  }
  managefav(id) {
    this.fav.addFav(id);
    this.active = this.fav.favs.includes(this.product.product_id);

  }


  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = this.route.snapshot.paramMap.get('id');
      this.client.get("https://meroemart.com/api/product/" + this.id).subscribe((res: any) => {
        this.product = res;
        this.active = this.fav.favs.includes(this.product.product_id);
        if (this.product.stocktype == 1) {
          this.product.variants.forEach(attr => {
            let v = new Variant();
            v.title = attr.name;
            v.id = attr.id;
            v.variants = [];
            attr.options.forEach(op => {
              v.variants.push(op)
            });
            this.variants.push(v);
          });
        } else {

          this.price = this.product.newprice;
          if (this.product.onsale) {
            this.oldprice = this.product.oldprice;
          }
          this.stock = this.product.quantity
        }

        var tempimages = [];
        tempimages.push("https://meroemart.com/" + this.product.product_images);
        this.product.images.forEach(img => {
          tempimages.push("https://meroemart.com/" + img.image);

        });

        this.images = tempimages;
        console.log(this.variants);
        console.log(this.product);
        this.recs.push(this.product);
        this.recs.push(this.product);
      });
    });

  }

  choose(event) {
    console.log(event);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
