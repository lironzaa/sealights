import { createAction, props } from '@ngrx/store';

import { Person } from '../interfaces/person-interface';

export const getPersons = createAction(
  '[Persons] Get Persons]',
);

export const personsFetched = createAction(
  '[Persons] Persons Fetched]',
  props<{ persons: Person[] }>()
);

export const createPerson = createAction(
  '[Persons] Create Person]',
  props<{ person: any }>()
);

export const personsError = createAction(
  '[Persons] Persons Error]',
  props<{ errorMessage: string }>()
);
