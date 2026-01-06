import { Routes } from '@angular/router';
import { Home } from '../home/home';

export const routes: Routes = [
  { path: 'home', component: Home },

  {
    path: 'counter',
    loadComponent: () => import('../counter/counter').then((m) => m.Counter),
  },
  {
    path: 'ngrx',
    loadComponent: () => import('../ngrx/ngrx/ngrx.component').then((m) => m.NgrxComponent),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
