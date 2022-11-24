import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type MovieState } from './state';

export const getMovieState = createFeatureSelector<MovieState>('movie');

export const getMovies = createSelector(getMovieState, (state) => {
  return state.movies;
});
