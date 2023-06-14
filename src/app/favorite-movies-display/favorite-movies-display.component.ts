import { Component, OnInit } from '@angular/core';
import { MovieState } from '../ngrx/movie.reducer';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { removeFavoriteById } from '../ngrx/favorite.actions';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { setIsFavorite } from '../ngrx/isfavorite.actions';
import { saveId } from '../ngrx/id-to-delete.actions';
@Component({
  selector: 'app-favorite-movies-display',
  templateUrl: './favorite-movies-display.component.html',
  styleUrls: ['./favorite-movies-display.component.css'],
})
export class FavoriteMoviesDisplayComponent implements OnInit {
  favorite$: Observable<MovieState[]>;
  movie$: Observable<MovieState>;
  idToDelete$: Observable<string>;

  constructor(
    private store: Store<{
      favorite: MovieState[];
      movie: MovieState;
      idToDelete: string;
    }>
  ) {
    this.favorite$ = store.select('favorite');
    this.movie$ = store.select('movie');
    this.idToDelete$ = store.select('idToDelete');
  }
  ngOnInit(): void {
    this.favorite$.subscribe((favorite) => {});
  }

  removeFavByID(movieId: string) {
    if (movieId) {
      this.store.dispatch(removeFavoriteById({ payload: movieId }));
      this.store.dispatch(saveId({ payload: movieId }));

      this.movie$.subscribe((value) => {
        if (value.imdbID === movieId) {
          this.store.dispatch(setIsFavorite({ payload: false }));
        }
      });
    }
  }
}
