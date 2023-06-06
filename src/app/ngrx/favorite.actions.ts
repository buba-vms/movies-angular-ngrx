import { createAction, props } from '@ngrx/store';
import { MovieState } from './movie.reducer';
export const findAllFavorites = createAction(
  '[Counter Component] Find All Favorites'
);

export const addFavorite = createAction(
  '[Counter Component] Add a Favorite Movie',
  props<{ payload: MovieState }>()
);

export const removeFavorite = createAction(
  '[Counter Component] remove a Favorite Movie',
  props<{ payload: MovieState }>()
);

export const removeFavoriteById = createAction(
  '[Counter Component] remove a Favorite Movie by id',
  props<{ payload: string }>()
);
