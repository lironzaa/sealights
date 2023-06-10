import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

import { getUsers } from "./users.actions";
import { User } from "../interfaces/User";
import { environment } from "../../../../environments/environment";
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  baseUrl = environment.baseUrl;
  getUsers = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    switchMap(() => {
      return this.http.get<User[]>(
        `${ this.baseUrl }persons`
      ).pipe(
        map(users => {
          return UsersActions.usersFetched({ users });
        })
      )
    })
  ));

  constructor(private actions$: Actions, private http: HttpClient) {}
}
