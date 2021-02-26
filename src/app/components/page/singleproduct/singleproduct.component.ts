import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Variant } from 'src/app/Model/variant';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FavService } from 'src/app/services/fav.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { QtyComponent } from '../../partial/qty/qty.component';
import { ViewedService } from 'src/app/services/viewed.service';
import { ApiService } from '../../../services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Setting } from 'src/app/Model/setting';



@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  url=Setting.url;
  disshown=true;
  cardqty:number=0;
  variant="none";
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

  @ViewChild('qty')qtyholder:QtyComponent;

  constructor(private loader:LoaderService,public client: ApiService,private router:Router, private route: ActivatedRoute, public fav: FavService, public location: Location,public cart:CartService,public viewservice:ViewedService) {
      this.loader.show(true);


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
    // this.route.queryParams.subscribe(params => {
      // console.log(params);
      this.id = this.route.snapshot.paramMap.get('id');
      this.client.get(Setting.apiurl+ "product/" + this.id).subscribe((res: any) => {
        this.product = res;
        this.viewservice.add(this.product.product_id,this.product.product_name,this.product.product_images);
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
        tempimages.push(Setting.url + this.product.product_images);
        this.product.images.forEach(img => {
          tempimages.push(Setting.url + img.image);

        });

        this.images = tempimages;
        console.log(this.variants);
        console.log(this.product);
        this.recs.push(this.product);
        this.recs.push(this.product);
        this.loader.show(false);
      });
    // });

  }

  clicked(){
    this.cart.addToCart(
        this.product.product_id,
        this.product.product_name,
        this.product.product_images,
        this.qtyholder.qty,
        this.price,
        this.variant,
    );
    this.router.navigate(['/cart']);
    

  }
 
  choose(event) {
    console.log(event);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  toogle(){
    this.disshown=!this.disshown;
  }

}
