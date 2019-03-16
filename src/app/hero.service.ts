import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //Method to return HEROES object from ./mock-heros
  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
