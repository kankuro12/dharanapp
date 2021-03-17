import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { QtyComponent } from './components/partial/qty/qty.component';
import { VariantChooserComponent } from './components/partial/variant-chooser/variant-chooser.component';
import { SmallComponent } from './components/partial/imageviwer/small/small.component';
import { ImageviwerComponent } from './components/partial/imageviwer/imageviwer.component';
import { SingleproductComponent } from './components/page/singleproduct/singleproduct.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SingletemplateComponent } from './components/template/singletemplate/singletemplate.component';
import { OthenavComponent } from './components/partial/othenav/othenav.component';
import { CartComponent } from './components/page/cart/cart.component';
import { CartitemComponent } from './components/page/cart/cartitem/cartitem.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { MaindashbaordComponent } from './components/auth/dashboard/maindashbaord/maindashbaord.component';
import { AuthserviceService } from './services/auth/authservice.service';
import { ApiService } from './services/api.service';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoaderComponent } from './components/partial/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { CheckoutComponent } from './components/page/checkout/checkout.component';
import { OrdersComponent } from './components/page/orders/orders.component';
import { SingleorderComponent } from './components/page/orders/singleorder/singleorder.component';
import { CategoryallComponent } from './components/page/categoryall/categoryall.component';
import { CategorywiseComponent } from './components/page/categorywise/categorywise.component';
import { SearchComponent } from './components/page/search/search.component';
import { PforgotComponent } from './components/auth/password/pforgot/pforgot.component';
import { PresetComponent } from './components/auth/password/preset/preset.component';
import { CollectionComponent } from './components/page/collection/collection.component';
import { CollectionitemComponent } from './components/page/collection/collectionitem/collectionitem.component';
import { SinglecollectionComponent } from './components/page/collection/singlecollection/singlecollection.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { OrdercacheService } from './services/extra/ordercache.service';
import { OrdercomfirmComponent } from './components/page/extra/ordercomfirm/ordercomfirm.component';
import { ChangepasswordComponent } from './components/auth/changepassword/changepassword.component';
import { AllviewComponent } from './components/auth/alldashboard/allview/allview.component';
import { AllfavComponent } from './components/auth/alldashboard/allfav/allfav.component';
import { CustomComponent } from './components/home/custom/custom.component';
import { AdsComponent } from './components/home/ads/ads.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { LazyForDirective } from './Directives/app.lazyNgFor';
import { ReviewComponent } from './components/partial/review/review.component';

@NgModule({
  declarations: [CheckoutComponent,AppComponent,MainComponent,MobilenavComponent,MobilefooterComponent,CategoriesComponent,HomemainComponent,ProductComponent,ProductgroupComponent,ShopmainComponent,QtyComponent,VariantChooserComponent,SmallComponent,ImageviwerComponent,SingleproductComponent,SingletemplateComponent,OthenavComponent,CartComponent,CartitemComponent,LoginComponent,DashboardComponent,MaindashbaordComponent,SignupComponent,LoaderComponent,SingleorderComponent,OrdersComponent,CategoryallComponent,CategorywiseComponent,SearchComponent,PforgotComponent,PresetComponent,CollectionComponent,CollectionitemComponent,SinglecollectionComponent,ProfileComponent,OrdercomfirmComponent,ChangepasswordComponent,AllviewComponent,AllfavComponent,CustomComponent,AdsComponent,CarouselComponent,LazyForDirective,ReviewComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),HttpClientModule, NgbModule,BrowserAnimationsModule,CarouselModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ScrollserviceService,HomepageService,FavService,AuthserviceService,ApiService,LoaderService,OrdercacheService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
