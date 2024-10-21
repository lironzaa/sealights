import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsComponent } from './components/persons/persons.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PersonAddressComponent } from './components/person-form/person-address/person-address.component';
import { AddCityDialogComponent } from './components/dialog/add-city/add-city-dialog.component';

@NgModule({
  declarations: [
    PersonsComponent,
    PersonFormComponent,
    PersonAddressComponent,
    AddCityDialogComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    SharedModule,
  ]
})
export class PersonsModule { }
