import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { FormsComponent } from './components/forms/forms.component';


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
