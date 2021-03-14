import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { MaindashbaordComponent } from './components/auth/dashboard/maindashbaord/maindashbaord.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CartComponent } from './components/page/cart/cart.component';
import { CheckoutComponent } from './components/page/checkout/checkout.component';
import { CartitemComponent } from './components/page/cart/cartitem/cartitem.component';
import { HomemainComponent } from './components/page/home/homemain/homemain.component';
import { ShopmainComponent } from './components/page/shop/shopmain/shopmain.component';
import { SingleproductComponent } from './components/page/singleproduct/singleproduct.component';
import { MainComponent } from './components/template/main/main.component';
import { OrdersComponent } from './components/page/orders/orders.component';
import { AuthserviceService } from './services/auth/authservice.service';
import { CategorywiseComponent } from './components/page/categorywise/categorywise.component';
import { CategoriesComponent } from './components/page/home/categories/categories.component';
import { CategoryallComponent } from './components/page/categoryall/categoryall.component';
import { SearchComponent } from './components/page/search/search.component';
import { PforgotComponent } from './components/auth/password/pforgot/pforgot.component';
import { PresetComponent } from './components/auth/password/preset/preset.component';
import { CollectionComponent } from './components/page/collection/collection.component';
import { SinglecollectionComponent } from './components/page/collection/singlecollection/singlecollection.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { OrdercomfirmComponent } from './components/page/extra/ordercomfirm/ordercomfirm.component';
import { AllviewComponent } from './components/auth/alldashboard/allview/allview.component';
import { AllfavComponent } from './components/auth/alldashboard/allfav/allfav.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomemainComponent },
      {
        path: 'shop',
        component: ShopmainComponent,
      },
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'collections',
    component: CollectionComponent,
  },
  {
    path: 'collection/:id',
    component: SinglecollectionComponent,
  },
  {
    path: 'category/:id',
    component: CategorywiseComponent,
  },
  {
    path: 'product/:id',
    component: SingleproductComponent,
  },
  {
    path: 'categories',
    component: CategoryallComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path:"ordersuccess",
    component:OrdercomfirmComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot', 
    component: PforgotComponent,
  },
  {
    path: 'reset', 
    component: PresetComponent,
  },
  {
    path: 'user',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'orders/:status',
    component: OrdersComponent,
    canActivate: [AuthserviceService],
  },
  {
    path: 'allview',
    component: AllviewComponent,
  },
  {
    path: 'allfav',
    component: AllfavComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
