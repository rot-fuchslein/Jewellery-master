import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CatalogComponent } from './pages/catalog.component';
import { LoginComponent } from './pages/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
