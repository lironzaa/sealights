import { createAction, props } from "@ngrx/store";

import { User } from "../interfaces/User";

export const getUsers = createAction('GET_USERS');

export const usersFetched = createAction(
  'USERS_FETCHED',
  props<{ users: User[] }>()
);
