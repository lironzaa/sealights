import { createReducer, on } from "@ngrx/store";

import { User } from "../interfaces/User";
import * as UsersActions from './users.actions';

export interface UsersState {
  users: User[];
  isLoading: boolean;
}

const initialState: UsersState = {
  users: [],
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
  })
);
