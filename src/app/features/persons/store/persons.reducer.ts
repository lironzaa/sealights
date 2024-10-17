import { createFeature, createReducer, on } from '@ngrx/store';

import { Person } from '../interfaces/person-interface';
import { getPersons, personsError, personsFetched } from './persons.actions';

export interface PersonsState {
  persons: Person[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PersonsState = {
  persons: [],
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
    // on(createPerson, (state): PersonsState => ({
    //   ...state,
    //   error: null,
    //   isLoading: true
    // })),
    on(personsError, (state, { errorMessage }): PersonsState => ({
      ...state,
      error: errorMessage,
      isLoading: false
    })),
  ),
})
