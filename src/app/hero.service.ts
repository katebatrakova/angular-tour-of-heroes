// new service imports the Angular Injectable symbol
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
// import mock heroes array with ten heroes objects
import { HEROES } from './mock-heroes';

import {MessageService} from './message.service'

// class is annotated with the @Injectable() decorator providing metadata
@Injectable({
  // register a provider to make Service available to the DI system
  // Provider instantiates the HeroService class to provide the service at "root" level
  providedIn: 'root'
})

// HeroService class provides injectable service and can have own dependancies
export class HeroService {

  constructor(
    //  "service-in-service" scenario
    private messageService: MessageService
  ) { }

  // before
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // after
  getHeroes(): Observable<Hero[]> {
    // send a message when the heroes are fetched
    this.messageService.add('HeroService: fetched heroes');
    // Observable<Hero[]> emits a single value, the array of mock heroes.
    return of(HEROES);
    // used to return a Hero[] - now returns an Observable<Hero[]>
  }
}
