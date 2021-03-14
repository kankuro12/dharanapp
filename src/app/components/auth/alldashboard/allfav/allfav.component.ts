import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-allfav',
  templateUrl: './allfav.component.html',
  styleUrls: ['./allfav.component.scss'],
})
export class AllfavComponent implements OnInit {

  constructor(public fav:FavService) { }

  ngOnInit() {}

}
