import { createReducer, on } from '@ngrx/store';
import { setIsFavorite } from './isfavorite.actions';
const initialState: boolean = false;

export const isFavoriteReducer = createReducer(
  initialState,
  on(setIsFavorite, (state, action) => action.payload)
);
