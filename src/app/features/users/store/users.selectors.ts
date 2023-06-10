import { createSelector } from "@ngrx/store";

import { AppState } from "../../../core/store/app.reducer";
import { UsersState } from "./users.reducer";

export const usersState = (state: AppState) => state.users;

export const selectGetUsers = createSelector(
  usersState,
  (state: UsersState) => state
);
