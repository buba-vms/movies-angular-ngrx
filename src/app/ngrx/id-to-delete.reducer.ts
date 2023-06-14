import { createReducer, on } from '@ngrx/store';
import { saveId } from './id-to-delete.actions';
const initialState: string = '';

export const idToDeleteReducer = createReducer(
  initialState,
  on(saveId, (state, action) => action.payload)
);
