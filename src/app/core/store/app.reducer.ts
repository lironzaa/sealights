import { ActionReducerMap } from '@ngrx/store';

import * as fromUsers from '../../features/users/store/users.reducer';

export interface AppState {
  users: fromUsers.UsersState;
}

export const appReducer: ActionReducerMap<AppState> = {
  users: fromUsers.usersReducer,
};
