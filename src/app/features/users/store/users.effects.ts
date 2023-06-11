import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { addCity, getCountries, getUsers, getCitiesByCountry, addUser } from "./users.actions";
import { City, Country, User } from "../interfaces/User";
import { environment } from "../../../../environments/environment";
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  baseUrl = environment.baseUrl;

  constructor(private actions$: Actions, private http: HttpClient,
              private router: Router) {}

  getUsers = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    switchMap(() => this.http.get<User[]>(`${ this.baseUrl }persons`).pipe(
      map(users => UsersActions.usersFetched({ users }))
    ))
  ));

  getCountries = createEffect(() => this.actions$.pipe(
    ofType(getCountries),
    switchMap(() => this.http.get<Country[]>(`${ this.baseUrl }countries`).pipe(
      map(countries => UsersActions.countriesFetched({ countries }))
    ))
  ));

  addCity = createEffect(() => this.actions$.pipe(
    ofType(addCity),
    switchMap((addCity) => this.http.post<City>(`${ this.baseUrl }city`, addCity.city).pipe(
      map(() => UsersActions.getCitiesByCountry({ countryId: addCity.city.countryId }))
    ))
  ));

  getCitiesByCountry = createEffect(() => this.actions$.pipe(
    ofType(getCitiesByCountry),
    switchMap((getCities) => this.http.get<City[]>(`${ this.baseUrl }cities/${ getCities.countryId }`).pipe(
      map(cities => UsersActions.citiesFetched({ cities, countryId: getCities.countryId }))
    ))
  ));

  addUser = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    switchMap((addUser) => this.http.post<City>(`${ this.baseUrl }person`, addUser.user).pipe(
      map(() => {
        this.router.navigate([ 'users/list' ]);
        return UsersActions.userCreated();
      })
    ))
  ));
}
