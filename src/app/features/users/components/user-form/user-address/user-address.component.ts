import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { MatDialog } from "@angular/material/dialog";
import { FormArray, FormGroup } from "@angular/forms";

import { Country } from "../../../interfaces/User";
import { AddCityDialogComponent } from "../../dialogs/add-city-dialog/add-city-dialog.component";
import { UsersState } from "../../../store/users.reducer";
import * as fromApp from "../../../../../core/store/app.reducer";
import { selectGetUsers } from "../../../store/users.selectors";
import { addCity } from "../../../store/users.actions";


@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: [ './user-address.component.scss' ]
})
export class UserAddressComponent implements OnDestroy {
  @Input() usersData$: Observable<UsersState>;
  @Input() addressesArray!: FormArray;
  @Input() userForm!: FormGroup;
  private dialogRefSubscription!: Subscription;

  constructor(private store: Store<fromApp.AppState>, public dialog: MatDialog) {
    this.usersData$ = store.select(selectGetUsers);
  }

  removeAddress(index: number): void {
    this.addressesArray.removeAt(index);
  }

  addCity(country: Country, index: number): void {
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      data: { title: `Add city to ${ country.name }`, label: 'City name :' },
    });

    this.dialogRefSubscription = dialogRef.afterClosed().subscribe(cityName => {
      if (cityName) {
        this.store.dispatch(addCity({ city: { name: cityName, countryId: country.id } }));
        const addressesFormArray = this.userForm.get('addresses') as FormArray;
        const addressFormGroup = addressesFormArray.at(index) as FormGroup;
        addressFormGroup.get('country')?.patchValue(null);
        addressFormGroup.get('city')?.patchValue(null);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.dialogRefSubscription) this.dialogRefSubscription.unsubscribe();
  }
}
