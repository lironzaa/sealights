import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsComponent } from './components/persons/persons.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PersonsComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    SharedModule
  ]
})
export class PersonsModule { }
