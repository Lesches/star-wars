import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
baseUrl = 'https://www.swapi.co/api/'
  constructor(private http: HttpClient) { }

  searchPeople(query: string): Observable<Person[]> {
  return this.http.get<any>(`${this.baseUrl}people/?search=${query}`)
    .pipe(
      map(response => {
        const people = [];
        response.results.map(data => people.push(new Person(data)));
        return people;

      })
    );
  }
}
