import { Component } from '@angular/core';
import {Plugins,StatusBarStyle} from "@capacitor/core";
import { AuthserviceService } from './services/auth/authservice.service';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AuthserviceService,private router:Router,private loader:LoaderService) {
     this.router.events.subscribe((event:Event)=>{
        switch (true) {
           case event instanceof NavigationStart:
            console.log("route started");
            // this.loader.show(true);
            break;
            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError: {
              console.log("route ended");   
            }
          default:
            break;
        }
     });
  }
}
