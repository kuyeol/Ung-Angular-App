import {NgModule} from '@angular/core';
import {provideRouter, Routes, withComponentInputBinding} from '@angular/router';

import {authGuard} from './auth/auth.guard';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'}, {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canMatch: [authGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
        import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: {preload: true}
  },
  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/