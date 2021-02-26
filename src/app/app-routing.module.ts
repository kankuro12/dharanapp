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

const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    children: [
      { path: 'home', component: HomemainComponent },
      {
        path:'shop',
        component:ShopmainComponent
      },
     
    ]
  },
  {
    path:"product/:id",
    component:SingleproductComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"checkout",
    component:CheckoutComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"user",
    component:DashboardComponent,
   
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
