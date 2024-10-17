import { ActionReducerMap } from '@ngrx/store';

import * as fromPersons from '../../features/persons/store/persons.reducer';
import { personsFeature } from '../../features/persons/store/persons.reducer';

export interface AppState {
  persons: fromPersons.PersonsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  persons: personsFeature.reducer,
};
