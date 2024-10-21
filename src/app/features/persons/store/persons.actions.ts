import { createAction, props } from '@ngrx/store';

import { City, Country, Person } from '../interfaces/person-interface';
import { CreatePersonData } from "../interfaces/person-actions-interface";

export const getPersons = createAction(
  '[Persons] Get Persons]'
);

export const personsFetched = createAction(
  '[Persons] Persons Fetched]',
  props<{ persons: Person[] }>()
);

export const getCountries = createAction(
  '[Persons] Get Countries]'
);

export const countriesFetched = createAction(
  '[Persons] Countries Fetched]',
  props<{ countries: Country[] }>()
);

export const addCity = createAction(
  '[Persons] Add City]',
  props<{ name: string, countryId: number }>()
);

export const getCitiesByCountry = createAction(
  '[Persons] Get Cities By Country]',
  props<{ countryId: number }>()
);

export const citiesFetched = createAction(
  '[Persons] Cities Fetched]',
  props<{ cities: City[], countryId: number }>()
);

export const createPerson = createAction(
  '[Persons] Create Person]',
  props<{ person: CreatePersonData }>()
);

export const personCreated = createAction(
  '[Persons] Person Created]'
);

export const personsError = createAction(
  '[Persons] Persons Error]',
  props<{ errorMessage: string }>()
);
