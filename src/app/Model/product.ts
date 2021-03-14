import { Setting } from "./setting";

export class Product {
    id:number;
    name:string;
    image:string;
    stocktype:number;
    oldrate:number;
    newrate:number;
    onsale:boolean;
    
    set(pp:any){
       
            this.name = pp.product_name;
            this.id = pp.product_id;
            this.onsale = pp.onsale;
            this.newrate = pp.mark_price;
            this.oldrate = pp.mark_price;
            this.image = Setting.url + pp.product_images;
          
}
}
