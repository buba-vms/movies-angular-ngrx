import { createAction, props } from '@ngrx/store';
import { MovieState } from './movie.reducer';
export const searchMovie = createAction(
  '[Counter Component] Search Movie',
  props<{ payload: MovieState }>()
);
