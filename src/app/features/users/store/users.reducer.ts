import { createReducer, on } from "@ngrx/store";

import { Country, User } from "../interfaces/User";
import * as UsersActions from './users.actions';

export interface UsersState {
  users: User[];
  isLoading: boolean;
  countries: Country[];
}

const initialState: UsersState = {
  users: [],
  countries: [],
  isLoading: false,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(UsersActions.usersFetched, (state, action) => {
    return {
      ...state,
      isLoading: false,
      users: [ ...action.users ]
    }
  }),
  on(UsersActions.getCountries, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(UsersActions.countriesFetched, (state, action) => {
    return {
      ...state,
      isLoading: false,
      countries: [ ...action.countries ]
    }
  }),
  on(UsersActions.addCity, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  on(UsersActions.citiesFetched, (state, action) => {
    const updatedIndex = state.countries.findIndex(country => country.id === action.countryId);
    const updatedCountries = [...state.countries];
    updatedCountries[updatedIndex] = {
      ...updatedCountries[updatedIndex],
      cities: action.cities
    };
    return {
      ...state,
      isLoading: false,
      countries: updatedCountries
    }
  }),
);
