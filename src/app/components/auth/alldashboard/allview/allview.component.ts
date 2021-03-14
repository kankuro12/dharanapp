import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ViewedService } from 'src/app/services/viewed.service';

@Component({
  selector: 'app-allview',
  templateUrl: './allview.component.html',
  styleUrls: ['./allview.component.scss'],
})
export class AllviewComponent implements OnInit {
  url=Setting.url;
  constructor(public view:ViewedService) { }

  ngOnInit() {}

}
