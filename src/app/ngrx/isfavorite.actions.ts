import { createAction, props } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const setIsFavorite = createAction(
  '[isFavorite Component] set favorite',
  props<{ payload: boolean }>()
);
