import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
      }
    ]
  },
  {
    path:"product/:id",
    component:SingleproductComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
