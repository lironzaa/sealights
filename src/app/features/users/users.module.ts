import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SharedModule } from "../../shared/shared.module";
import { AddCityDialogComponent } from './components/dialogs/add-city-dialog/add-city-dialog.component';
import { UserAddressComponent } from './components/user-form/user-address/user-address.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent,
    AddCityDialogComponent,
    UserAddressComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule {
}
