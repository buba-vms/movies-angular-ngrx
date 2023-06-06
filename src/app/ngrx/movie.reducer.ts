import { createReducer, on } from '@ngrx/store';
import { searchMovie } from './movie.actions';

export interface MovieState {
  actors: string;
  title: string;
  plot: string;
  poster: string;
  imdbRating: string;
  imdbID: string;
}

// Define the initial state using that type
const initialState: MovieState = {
  actors: 'Pedro Pascal, Bella Ramsey, Anna Torv',
  title: 'The Last of Us',
  plot: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
  poster:
    'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg',
  imdbRating: '9.1',
  imdbID: 'teste',
};

export const movieReducer = createReducer(
  initialState,
  on(searchMovie, (state, action) => {
    return {
      actors: action.payload.actors,
      title: action.payload.title,
      plot: action.payload.plot,
      poster: action.payload.poster,
      imdbRating: action.payload.imdbRating,
      imdbID: action.payload.imdbID,
    };
  })
);
