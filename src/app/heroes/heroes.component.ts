import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HeroService } from '../hero.service';



// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit {
  //before : hero property of imported type Hero (interface created)
  //
  // hero: Hero = {
  //   name: 'Windstorm', id: 1
  // };

  // no selected hero when the application starts
  selectedHero: Hero;

// updated heroes property definition
  heroes: Hero[];


// assigns the clicked hero from the template to the component's selectedHero
onSelect(hero: Hero): void { // : void is used because the method return nothing
  this.selectedHero = hero;
}



  constructor(
    // Injected parameter defines a private heroService property and identifies it as a HeroService injection site
    private heroService: HeroService
  ) {
    // Commonly, the constructor shouldn't do anything.
    // Only for simple initialization such as wiring constructor parameters to properties
   }

  // initialization logic goes in this hook
  ngOnInit(): void {
    // calling getHeroes() after constructing a HeroesComponent instance
    this.getHeroes()
  }

  // method to retrieve the heroes from the service
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
