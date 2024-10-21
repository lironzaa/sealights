import { createFeature, createReducer, on } from '@ngrx/store';

import { Country, Person } from '../interfaces/person-interface';
import {
  getPersons,
  personsFetched,
  getCountries,
  countriesFetched,
  addCity,
  citiesFetched,
  createPerson,
  getCitiesByCountry,
  personCreated,
  personsError,
} from './persons.actions';

export interface PersonsState {
  persons: Person[];
  countries: Country[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PersonsState = {
  persons: [],
  countries: [],
  isLoading: false,
  error: null,
};

export const personsFeature = createFeature({
  name: 'persons',
  reducer: createReducer(
    initialState,
    on(getPersons, (state): PersonsState => ({
      ...state,
      persons: [],
      error: null,
      isLoading: true
    })),
    on(personsFetched, (state, { persons }): PersonsState => ({
      ...state,
      persons: persons,
      error: null,
      isLoading: false
    })),
    on(getCountries, (state): PersonsState => ({
      ...state,
      isLoading: true
    })),
    on(countriesFetched, (state, { countries }): PersonsState => ({
      ...state,
      isLoading: false,
      countries: countries
    })),
    on(addCity, (state): PersonsState => ({
      ...state,
      isLoading: true,
    })),
    on(getCitiesByCountry, (state): PersonsState => ({
      ...state,
      isLoading: true,
    })),
    on(citiesFetched, (state, { cities, countryId }): PersonsState => {
      const updatedCountries = state.countries.map(country => {
        if (country.id === countryId) {
          return {
            ...country,
            cities: cities
          };
        }
        return country;
      });

      return {
        ...state,
        isLoading: false,
        countries: updatedCountries
      };
    }),
    on(createPerson, (state): PersonsState => ({
      ...state,
      error: null,
      isLoading: true
    })),
    on(personCreated, (state): PersonsState => ({
      ...state,
      error: null,
      isLoading: false
    })),
    on(personsError, (state, { errorMessage }): PersonsState => ({
      ...state,
      error: errorMessage,
      isLoading: false
    })),
  ),
})
