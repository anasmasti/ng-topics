import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  catchError,
  from,
  Observable,
  of,
  share,
  take,
  tap,
  throwError,
} from 'rxjs';
import { getMovies } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  movies$!: Observable<Array<string>>;
  usersObservable$!: Observable<{ id: number; name: string }[]>;
  usersSharebleObservable$!: Observable<{ id: number; name: string }[]>;
  data: { id: number; name: string }[] = [
    { id: 1, name: 'Anas' },
    { id: 2, name: 'Adam' },
  ];

  users: { id: number; name: string }[] = [];

  constructor(private store: Store) {}

  handleFormData(formData: string) {
    console.log('form', formData);
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);

    this.usersObservable$ = new Observable((observer) => {
      observer.next(this.data);
      setInterval(() => {
        this.data.push({ id: 3, name: 'name ' + ~~Math.random() });
      }, 5000);
      observer.next(this.data);
    });

    this.usersSharebleObservable$ = this.usersObservable$.pipe(share());

    this.usersSharebleObservable$.subscribe((data) => {
      this.users = data;
    });

    this.usersSharebleObservable$.subscribe((data) => {
      this.users = data;
    });
  }
}
