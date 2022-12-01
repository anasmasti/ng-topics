import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  JOKE_API_URL: string = 'https://v2.jokeapi.dev/joke/Any?amount=10';

  constructor(private http: HttpClient) {}

  getJoks(): Observable<any> {
    return this.http.get(this.JOKE_API_URL).pipe(
      map((data: any) => {
        let jokes: any = [];
        data.jokes.forEach((joke: any) => {
          jokes.push(
            !!joke.setup ? { content: joke.setup } : { content: joke.joke }
          );
        });
        return jokes;
      })
    );
  }
}
