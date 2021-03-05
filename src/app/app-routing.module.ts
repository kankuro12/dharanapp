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
    ],
  },
  {
    path: 'search',
    component: SearchComponent,
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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'user',
    component: DashboardComponent,
  },
  {
    path: 'orders/:status',
    component: OrdersComponent,
    canActivate: [AuthserviceService],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
