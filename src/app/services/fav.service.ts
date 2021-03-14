import { Injectable } from '@angular/core';
import { Viewed } from '../Model/viewed';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  favs:Viewed[]=[];
  constructor() { 
    var data=localStorage.getItem('fav');
    console.log(data);
    if(data !=null && data!=undefined){
      this.favs=JSON.parse(data);
    }
  }
  addFav(id,name,image){
    let i = this.favs.findIndex((obj => obj.id == id));
    if(i==-1){
      let v=new Viewed();
      v.id=id;
      v.name=name;
      v.image=image;
      this.favs.unshift(v);
    }else{
      this.favs.splice(i,1);
    }
    console.log(this.favs);
    localStorage.setItem("fav", JSON.stringify(this.favs));

  }
  clear(){
    this.favs=[];

    localStorage.setItem("fav", JSON.stringify(this.favs));

  }

  includes(id:number){
    return this.favs.findIndex((obj => obj.id == id))!=-1;
    
  }
}
