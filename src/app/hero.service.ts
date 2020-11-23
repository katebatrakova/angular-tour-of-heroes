// new service imports the Angular Injectable symbol
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
// import mock heroes array with ten heroes objects
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service'

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';



// class is annotated with the @Injectable() decorator providing metadata
@Injectable({
  // register a provider to make Service available to the DI system
  // Provider instantiates the HeroService class to provide the service at "root" level
  providedIn: 'root'
})

// HeroService class provides injectable service and can have own dependancies
export class HeroService {

  // form - :base/:collectionName .
  // base -the resource to which requests are made
  // collectionName is the heroes data object in the in-memory-data-service.ts
  private heroesUrl = 'api/heroes';  // URL to web api


  constructor(
    private http: HttpClient,
    //  "service-in-service" scenario
    private messageService: MessageService
  ) { }

    /** Log a HeroService message with the MessageService */
  private log(message: string) {
      // send a message when the heroes are fetched
      this.messageService.add(`HeroService: ${message}`);
    }

   // This HttpClient.get() call returns an Observable<Hero[]>; that is, "an observable of hero arrays"
  getHeroes(): Observable<Hero[]> {
    // HttpClient methods return an RxJS Observable,a single value
    // applying the type specifier - <Hero[]>
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        // catchError() operator intercepts an Observable that failed.
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    // construct a request URL with the desired hero's id
    const url = `${this.heroesUrl}/${id}`;
    // server responds with a single hero
    // returns an Observable<Hero> ("an observable of Hero objects")
    return this.http.get<Hero>(url)
      .pipe(
          tap(_ => this.log(`fetched hero id=${id}`)),
          catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
