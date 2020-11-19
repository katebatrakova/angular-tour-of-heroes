import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
//import mock heroes array with ten heroes objects. 
import { HEROES } from '../mock-heroes';



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

  // bind component property heroes with HEROES 
  heroes = HEROES;


// assigns the clicked hero from the template to the component's selectedHero
onSelect(hero: Hero): void { // : void is used because the method return nothing
  this.selectedHero = hero;
}



  constructor() { 
    // console.log(this.hero)
  }



  // initialization logic goes in this hook
  ngOnInit(): void {
  }

}
