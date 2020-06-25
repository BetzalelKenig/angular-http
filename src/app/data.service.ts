import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  persons = [];
  personsHtml = [];

  constructor(private http: HttpClient) {
    this.loadJson();
  }

  getData(url: string): Observable<string> {
    return this.http.get<string>(url);
  }

  loadJson = () => {
    this.getData(
      'https://raw.githubusercontent.com/BetzalelKenig/web-projects/master/ajax/random-persons.json'
    ).subscribe((data) => this.persons.push(data));
  };

  loadHtml = () => {
    this.getData(
      'https://raw.githubusercontent.com/BetzalelKenig/web-projects/master/ajax/persons.html'
    ).subscribe((data) => this.personsHtml.push(data));
  };
}
