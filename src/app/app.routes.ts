import { Routes } from '@angular/router';

export const routes: Routes = [


  {path: 'home', loadComponent: () => import('./static-nav/static-nav.component').then(mod => mod.StaticNavComponent)},
  // ...

];
