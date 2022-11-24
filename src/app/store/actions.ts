import { createAction, props } from '@ngrx/store';

// Actions declarations
const ADD_MOVIE = '[Movies] Add';

export const addMovie = createAction(ADD_MOVIE, props<{ movie: string }>());
