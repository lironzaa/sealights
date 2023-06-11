import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import * as fromApp from "../../../.././core/store/app.reducer";
import { emptyFormArrayValidator } from "../../../../shared/validators/empty-form-array-validator";
import { selectGetUsers } from "../../store/users.selectors";
import { UsersState } from "../../store/users.reducer";
import { addUser } from "../../store/users.actions";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.scss' ]
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  addressesArray!: FormArray;
  usersData$: Observable<UsersState>;

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

  onSubmitUserForm(): void {
    this.store.dispatch(addUser({ user: this.userForm.value }));
  }
}
