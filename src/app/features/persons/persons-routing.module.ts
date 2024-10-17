import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonsComponent } from './components/persons/persons.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'create', component: PersonFormComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PersonsRoutingModule {
}
