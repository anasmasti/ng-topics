import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { getMovies } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  movies$!: Observable<Array<string>>;

  constructor(private store: Store) {}

  handleFormData(formData: string) {
    console.log('form', formData);
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);
  }
}
