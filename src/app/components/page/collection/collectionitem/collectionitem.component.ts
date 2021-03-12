import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';

@Component({
  selector: 'app-collectionitem',
  templateUrl: './collectionitem.component.html',
  styleUrls: ['./collectionitem.component.scss'],
})
export class CollectionitemComponent implements OnInit {
  url=Setting.url;
  @Input() coll:any
  constructor() { }

  ngOnInit() {
    console.log(this.coll,"collection single");
  }

}
