import { createReducer, on } from "@ngrx/store";

import { Country, User } from "../interfaces/User";
import * as UsersActions from './users.actions';

export interface UsersState {
  users: User[];
  countries: Country[];
  isLoading: boolean;
}

const initialState: UsersState = {
  users: [],
  countries: [],
  isLoading: false
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
    const fetchedCities = action.cities.map(city => ({
      ...city,
      countryId: action.countryId
    }));
    const updatedCountries = state.countries.map(country => {
      if (country.id === action.countryId) {
        return {
          ...country,
          cities: fetchedCities
        };
      }
      return country;
    });
    return {
      ...state,
      isLoading: false,
      countries: updatedCountries
    }
  }),
  on(UsersActions.addUser, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  on(UsersActions.userCreated, (state) => {
    return {
      ...state,
      isLoading: false,
    }
  }),
);
