import { Injectable } from '@angular/core';
import { Viewed } from '../Model/viewed';

@Injectable({
  providedIn: 'root'
})
export class ViewedService {

  views:Viewed[]=[];
  constructor() { 
    var data=localStorage.getItem('view');
    console.log(data);
    if(data !=null && data!=undefined){
      this.views=JSON.parse(data);
    }
  }
  add(id,name,image){
    let i = this.views.findIndex((obj => obj.id == id));
    if(i==-1){
      let v=new Viewed();
      v.id=id;
      v.name=name;
      v.image=image;
      this.views.push(v);
    }
    console.log(this.views);
    localStorage.setItem("view", JSON.stringify(this.views));

  }
}
