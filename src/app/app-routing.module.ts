import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  {
    path: 'persons',
    loadChildren: () => import('./features/persons/persons.module').then(c => c.PersonsModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
