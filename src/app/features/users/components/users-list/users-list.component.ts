import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { UsersState } from "../../store/users.reducer";
import { getUsers } from "../../store/users.actions";
import * as fromApp from '../../../../core/store/app.reducer';
import { selectGetUsers } from "../../store/users.selectors";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {
  usersData$: Observable<UsersState>;

  constructor(private store: Store<fromApp.AppState>) {
    this.usersData$ = store.select(selectGetUsers);
  }

  ngOnInit() {
    this.store.dispatch(getUsers());
  }
}
