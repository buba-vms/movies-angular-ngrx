import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMoviesDisplayComponent } from './favorite-movies-display.component';

describe('FavoriteMoviesDisplayComponent', () => {
  let component: FavoriteMoviesDisplayComponent;
  let fixture: ComponentFixture<FavoriteMoviesDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteMoviesDisplayComponent]
    });
    fixture = TestBed.createComponent(FavoriteMoviesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
