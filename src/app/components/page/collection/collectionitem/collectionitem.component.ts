import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setting } from 'src/app/Model/setting';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-collectionitem',
  templateUrl: './collectionitem.component.html',
  styleUrls: ['./collectionitem.component.scss'],
})
export class CollectionitemComponent implements OnInit {
  url=Setting.url;
  @Input() coll:any
  constructor(private router:Router,private loader:LoaderService) { }

  ngOnInit() {
    console.log(this.coll,"collection single");
  }

  loadSingle(){
    this.loader.show(true);
    this.router.navigate(["/collection/"+this.coll.collection_id]);
  }

}
