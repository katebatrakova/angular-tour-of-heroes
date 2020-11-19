// new service imports the Angular Injectable symbol
import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import mock heroes array with ten heroes objects
import { HEROES } from './mock-heroes';

// class is annotated with the @Injectable() decorator providing metadata
@Injectable({
  // register a provider to make Service available to the DI system
  // Provider instantiates the HeroService class to provide the service at "root" level
  providedIn: 'root'
})

// HeroService class provides injectable service and can have own dependancies
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
