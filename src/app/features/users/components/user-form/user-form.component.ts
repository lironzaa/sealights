import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import * as fromApp from "../../../.././core/store/app.reducer";
import { emptyFormArrayValidator } from "../../../../shared/validators/empty-form-array-validator";
import { selectGetUsers } from "../../store/users.selectors";
import { UsersState } from "../../store/users.reducer";
import { AddCityDialogComponent } from "../dialogs/add-city-dialog/add-city-dialog.component";
import { addCity } from "../../store/users.actions";
import { City, Country } from "../../interfaces/User";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.scss' ]
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  addressesArray!: FormArray;
  usersData$: Observable<UsersState>;
  cities: City[] = [];

  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>,
              public dialog: MatDialog) {
    this.usersData$ = store.select(selectGetUsers);
  }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(): void {
    this.userForm = this.fb.group({
      'name': [ null, [ Validators.required ] ],
      'birthdate': [ null ],
      'addresses': this.fb.array([], [ emptyFormArrayValidator ])
    });
    this.addressesArray = this.userForm.get('addresses') as FormArray;
  }

  addAddress(): void {
    const addressGroup = this.fb.group({
      'name': [ null, [ Validators.required ] ],
      'country': [ null ],
      'city': [ null ],
      'street': [ null, [ Validators.required ] ],
    });
    this.addressesArray.push(addressGroup);
  }

  removeAddress(): void {
    console.log('removed');
  }

  addCity(country: Country): void {
    console.log(country);
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      data: { title: `Add city to ${ country.name }`, label: 'City name :' },
    });

    dialogRef.afterClosed().subscribe(cityName => {
      if (cityName) this.store.dispatch(addCity({ city: { name: cityName, countryId: country.id } }));
    });
  }

  itemSelected(selectedCountry: Country): void {
    console.log(selectedCountry);
    this.cities = selectedCountry.cities;
    console.log(this.cities);
  }

  onSubmitUserForm(): void {
    console.log(this.userForm);
  }
}
