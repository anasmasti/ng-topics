import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, share } from 'rxjs';
import Joke from './models/Joke';
import { JokeService } from './services/joke.service';
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
  initUsers: { id: number; name: string }[] = [
    { id: 1, name: 'Anas' },
    { id: 2, name: 'Adam' },
  ];
  users: { id: number; name: string }[] = [];
  jokes$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>([]);
  jokes: Joke[] = [];

  constructor(private store: Store, private jokeService: JokeService) {}

  handleFormData(formData: string) {
    console.log('form', formData);
  }

  generateNumber(): number {
    return ~~(Math.random() * 10);
  }

  generateName(index: number): string {
    let names = [
      'ahmad',
      'kamal',
      'ayoub',
      'yassine',
      'youssef',
      'saad',
      'morad',
      'jamal',
      'hamza',
      'rachid',
      'hamid',
    ];

    if (index < 10) {
      return names[index + 1];
    } else {
      return names[0];
    }
  }

  generateJokes(index: number): Joke {
    if (index < 10) {
      return this.jokes[index + 1];
    } else {
      return this.jokes[0];
    }
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);

    this.usersObservable$ = new Observable((observer) => {
      observer.next(this.initUsers);
      setInterval(() => {
        this.initUsers.push({
          id: this.generateNumber(),
          name: this.generateName(this.generateNumber()),
        });
      }, 8000);
      observer.next(this.initUsers);
    });

    this.usersSharebleObservable$ = this.usersObservable$.pipe(share());

    this.usersSharebleObservable$.subscribe((data) => {
      this.users = data;
    });

    this.usersSharebleObservable$.subscribe((data) => {
      this.users = data;
    });

    this.jokeService.getJoks().subscribe((data) => {
      this.jokes = data;
    });

    setInterval(() => {
      this.jokes$.next([this.generateJokes(this.generateNumber())]);
    }, 3000);
  }
}
