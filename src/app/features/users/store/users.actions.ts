import { createAction, props } from "@ngrx/store";

import { City, Country, User } from "../interfaces/User";

export const getUsers = createAction('GET_USERS');

export const usersFetched = createAction(
  'USERS_FETCHED',
  props<{ users: User[] }>()
);

export const getCountries = createAction('GET_COUNTRIES');

export const countriesFetched = createAction(
  'COUNTRIES_FETCHED',
  props<{ countries: Country[] }>()
);

export const addCity = createAction(
  'ADD_CITY',
  props<{ city: City }>()
);

export const getCitiesByCountry = createAction(
  'GET_CITIES',
  props<{ countryId: number }>()
);

export const citiesFetched = createAction(
  'CITIES_FETCHED',
  props<{ cities: City[], countryId: number }>()
);

export const addUser = createAction(
  'ADD_USER',
  props<{ user: User }>()
);

export const userCreated = createAction('USER_CREATED');
