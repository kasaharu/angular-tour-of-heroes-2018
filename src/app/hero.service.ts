import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
