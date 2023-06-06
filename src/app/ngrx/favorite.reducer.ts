import { MovieState } from './movie.reducer';
import { createReducer, on } from '@ngrx/store';
import {
  findAllFavorites,
  addFavorite,
  removeFavorite,
  removeFavoriteById,
} from './favorite.actions';

const initialState: MovieState[] = [];

export const favoriteReducer = createReducer(
  initialState,
  on(findAllFavorites, (state) => {
    return state;
  }),

  on(addFavorite, (state, action) => {
    const newFavorite = action.payload;
    return [...state, newFavorite];
  }),

  on(removeFavorite, (state, action) => {
    const favoriteToRemove = action.payload;
    let newState = [...state];
    newState = newState.filter((movie) => {
      if (movie.imdbID !== favoriteToRemove.imdbID) {
        return movie;
      }
    });

    return newState;
  }),

  on(removeFavoriteById, (state, action) => {
    const movieIdToRemove = action.payload;
    let newState = [...state];
    newState = newState.filter((movie) => {
      if (movie.imdbID !== movieIdToRemove) {
        return movie;
      }
    });

    return newState;
  })
);
