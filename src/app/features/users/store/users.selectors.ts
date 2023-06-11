import { createSelector } from "@ngrx/store";

import { AppState } from "../../../core/store/app.reducer";
import { UsersState } from "./users.reducer";

export const usersState = (state: AppState) => state.users;

export const selectGetUsers = createSelector(
  usersState,
  (state: UsersState) => ({
    ...state,
    users: state.users.map(user => ({
      ...user,
      addressesCount: user.addresses.length,
      formattedDate: user.birthdate !== 'NA' ? new Date(user.birthdate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }) : 'NA'
    }))
  })
);
