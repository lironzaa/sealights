import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import {
  addCity,
  citiesFetched,
  countriesFetched,
  getCitiesByCountry,
  getCountries,
  getPersons,
  personsError,
  personsFetched,
  personCreated,
  createPerson
} from './persons.actions';
import { City, Country, Person } from '../interfaces/person-interface';
import { AppToastrService } from '../../../shared/services/toastr.service';
import { ToastrTypeEnum } from '../../../shared/enums/toastr/toastr-type-enum';

@Injectable()
export class PersonsEffects {
  router = inject(Router);
  toastrService = inject(AppToastrService);
  http = inject(HttpClient);
  actions$ = inject(Actions);

  baseUrl = environment.baseUrl;
  personApiPrefix = this.baseUrl + 'person';
  personsApiPrefix = this.baseUrl + 'persons';
  countriesApiPrefix = this.baseUrl + 'countries';
  cityApiPrefix = this.baseUrl + 'city';
  citiesApiPrefix = this.baseUrl + 'cities';

  getPersons = createEffect(() => this.actions$.pipe(
    ofType(getPersons),
    switchMap(() => this.http.get<Person[]>(`${ this.personsApiPrefix }`).pipe(
      map(persons => personsFetched({ persons: this.formatPersons(persons) })),
      catchError((errorResponse: HttpErrorResponse) => this.handleError(errorResponse.message))
    )))
  );

  getCountries = createEffect(() => this.actions$.pipe(
    ofType(getCountries),
    switchMap(() => this.http.get<Country[]>(`${ this.countriesApiPrefix }`).pipe(
      map(countries => countriesFetched({ countries })),
      catchError((errorResponse: HttpErrorResponse) => this.handleError(errorResponse.message))
    )))
  );

  addCity = createEffect(() => this.actions$.pipe(
    ofType(addCity),
    switchMap((data) => this.http.post(`${ this.cityApiPrefix }`, { name: data.name, countryId: data.countryId }).pipe(
      map(() => getCitiesByCountry({ countryId: data.countryId })),
      catchError((errorResponse: HttpErrorResponse) => this.handleError(errorResponse.message))
    )))
  );

  getCitiesByCountry = createEffect(() => this.actions$.pipe(
    ofType(getCitiesByCountry),
    switchMap((data) => this.http.get<City[]>(`${ this.citiesApiPrefix }/${ data.countryId }`).pipe(
      map((cities) => citiesFetched({ cities: cities, countryId: data.countryId })),
      catchError((errorResponse: HttpErrorResponse) => this.handleError(errorResponse.message))
    )))
  );

  createPerson = createEffect(() => this.actions$.pipe(
    ofType(createPerson),
    switchMap((data) => this.http.post(`${ this.personApiPrefix }`, data.person).pipe(
      map(() => {
        this.router.navigate([ 'persons' ]);
        return personCreated();
      }),
      catchError((errorResponse: HttpErrorResponse) => this.handleError(errorResponse.message))
    )))
  );

  formatPersons(persons: Person[]): Person[] {
    return persons.map(person => {
      return {
        ...person,
        addressesCount: person.addresses.length,
      }
    })
  }

  handleError(errorMessage: string) {
    this.toastrService.showToastr(errorMessage, ToastrTypeEnum.Error);
    return of(personsError({ errorMessage }));
  }
}
