import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainComponent } from './components/template/main/main.component';
import { MobilenavComponent } from './components/partial/mobilenav/mobilenav.component';
import { ScrollserviceService } from './services/scrollservice.service';
import { MobilefooterComponent } from './components/partial/mobilefooter/mobilefooter.component';
import { CategoriesComponent } from './components/page/home/categories/categories.component';
import { HomemainComponent } from './components/page/home/homemain/homemain.component';
import { ProductComponent } from './components/partial/product/product.component';
import { ProductgroupComponent } from './components/partial/productgroup/productgroup.component';
import { HomepageService } from './services/homepage.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavService } from './services/fav.service';
import { ShopmainComponent } from './components/page/shop/shopmain/shopmain.component';

@NgModule({
  declarations: [AppComponent,MainComponent,MobilenavComponent,MobilefooterComponent,CategoriesComponent,HomemainComponent,ProductComponent,ProductgroupComponent,ShopmainComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),HttpClientModule, NgbModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ScrollserviceService,HomepageService,FavService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
