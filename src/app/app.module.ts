import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StoreModule } from '@ngrx/store';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { movieReducer } from './ngrx/movie.reducer';
import { FooterComponent } from './footer/footer.component';
import { favoriteReducer } from './ngrx/favorite.reducer';
import { FavoriteMoviesDisplayComponent } from './favorite-movies-display/favorite-movies-display.component';
import { isFavoriteReducer } from './ngrx/isfavorite.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MovieCardComponent,
    FooterComponent,
    FavoriteMoviesDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      movie: movieReducer,
      favorite: favoriteReducer,
      isFavorite: isFavoriteReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
