import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { UsersState } from "../../store/users.reducer";
import { getUsers } from "../../store/users.actions";
import * as fromApp from '../../../../core/store/app.reducer';
import { selectGetUsers } from "../../store/users.selectors";
import { TableColumn } from "../../../../shared/interfaces/data-table";
import { usersTableColumns } from "../../data/users-table-columns";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {
  usersData$: Observable<UsersState>;
  columns: TableColumn[] = usersTableColumns;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {
    this.usersData$ = store.select(selectGetUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }

  navigateToUserForm(): void {
    this.router.navigate([ 'users/add-user' ]);
  }
}
