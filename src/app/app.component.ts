import { Component } from '@angular/core';
import {Plugins,StatusBarStyle} from "@capacitor/core";
import { AuthserviceService } from './services/auth/authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AuthserviceService) {
     
  }
}
