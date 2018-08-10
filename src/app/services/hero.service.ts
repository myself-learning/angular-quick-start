import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class HeroService {
  readonly heroesUrl = "assets/data/heroes.json"; // URL to web api

  constructor(private http: HttpClient) {}

  getHeroes() {
    this.http.get(this.heroesUrl);
  }
}
