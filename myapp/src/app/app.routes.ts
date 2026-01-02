import { Routes } from '@angular/router';
import { Home } from '../home/home';

export const routes: Routes = [
  { path: 'home', component: Home },

  {
    path: 'counter',
    loadComponent: () =>
      import('../counter/counter').then(m => m.Counter)
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
