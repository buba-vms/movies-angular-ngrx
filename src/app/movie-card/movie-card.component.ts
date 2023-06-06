import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, take } from 'rxjs';
import { State, Store } from '@ngrx/store';
import { searchMovie } from '../ngrx/movie.actions';
import { MovieState } from '../ngrx/movie.reducer';
import axios from 'axios';
import { addFavorite, removeFavorite } from '../ngrx/favorite.actions';
import { setIsFavorite } from '../ngrx/isfavorite.actions';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  tisFavorite: boolean = false;
  favoriteMovies: string[] = [];

  movie$: Observable<MovieState>;
  favorite$: Observable<MovieState[]>;
  isFavorite$: Observable<boolean>;

  constructor(
    private store: Store<{
      isFavorite: boolean;

      movie: MovieState;
      favorite: MovieState[];
    }>
  ) {
    this.isFavorite$ = store.select('isFavorite');

    this.movie$ = store.select('movie');

    this.favorite$ = store.select('favorite');
  }
  ngOnInit(): void {
    this.movie$.subscribe((movie) => {
      // this.tisFavorite = false;
      this.store.dispatch(setIsFavorite({ payload: false }));

      this.favorite$.subscribe((favoriteArray) => {
        favoriteArray.map((fav) => {
          if (fav.imdbID === movie.imdbID) {
            // this.tisFavorite = true;
            this.store.dispatch(setIsFavorite({ payload: true }));
          }
        });
      });
    });
  }

  setIsFavorite(movieTitle: MovieState) {
    // this.tisFavorite = !this.tisFavorite;
    this.isFavorite$.pipe(take(1)).subscribe((isFavorite) => {
      console.log(isFavorite);
      const newIsFavorite = !isFavorite;
      this.store.dispatch(setIsFavorite({ payload: newIsFavorite }));
      console.log(newIsFavorite);

      const payload = movieTitle;

      if (newIsFavorite) {
        this.store.dispatch(addFavorite({ payload }));
      }
      if (!newIsFavorite) {
        this.store.dispatch(removeFavorite({ payload }));
        this.store.dispatch(setIsFavorite({ payload: false }));
      }
    });
  }
}
