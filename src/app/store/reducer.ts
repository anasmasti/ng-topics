import { createReducer, on } from '@ngrx/store';
import { addMovie } from './actions';
import { movieState } from './state';

export const movieReducer = createReducer(
  movieState,
  on(addMovie, (state, { movie }): any => {
    return {
      ...state,
      movies: [...state.movies, movie],
    };
  })
);
