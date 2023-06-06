import { Component, OnInit } from '@angular/core';
import { MovieState } from '../ngrx/movie.reducer';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { removeFavoriteById } from '../ngrx/favorite.actions';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { setIsFavorite } from '../ngrx/isfavorite.actions';
@Component({
  selector: 'app-favorite-movies-display',
  templateUrl: './favorite-movies-display.component.html',
  styleUrls: ['./favorite-movies-display.component.css'],
})
export class FavoriteMoviesDisplayComponent implements OnInit {
  favorite$: Observable<MovieState[]>;
  movie$: Observable<MovieState>;

  constructor(
    private store: Store<{ favorite: MovieState[]; movie: MovieState }>
  ) {
    this.favorite$ = store.select('favorite');
    this.movie$ = store.select('movie');
  }
  ngOnInit(): void {
    this.favorite$.subscribe((favorite) => {
      console.log('ola');
    });
  }

  removeFavByID(movieId: string) {
    if (movieId) {
      this.store.dispatch(removeFavoriteById({ payload: movieId }));

      this.movie$.pipe(take(1)).subscribe((value) => {
        console.log(value);

        if (value.imdbID === movieId) {
          this.store.dispatch(setIsFavorite({ payload: false }));
        }
      });
    }
  }
}
