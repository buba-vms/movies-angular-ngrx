import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchMovie } from '../ngrx/movie.actions';
import { MovieState } from '../ngrx/movie.reducer';
import axios from 'axios';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  filme: string = '';
  movie$: Observable<MovieState>;
  constructor(private store: Store<{ movie: MovieState }>) {
    this.movie$ = store.select('movie');
  }

  async searchMovie(movieTitle: string) {
    try {
      await axios
        .get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=7fc49c5b&t=${movieTitle}`
        )
        .then((response) => {
          const payload = {
            actors: response.data.Actors,
            title: response.data.Title,
            plot: response.data.Plot,
            poster: response.data.Poster,
            imdbRating: response.data.imdbRating,
            imdbID: response.data.imdbID,
          };

          this.store.dispatch(searchMovie({ payload }));
        });
    } catch (err) {
      console.log(err);
      alert('Movie not found');
    }
  }
}
