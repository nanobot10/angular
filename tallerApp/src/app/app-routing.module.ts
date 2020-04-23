import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
