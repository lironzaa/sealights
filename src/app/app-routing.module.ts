import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(c => c.UsersModule),
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

