import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'


// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})



export class HeroesComponent implements OnInit {
  //hero property of imported type Hero (interface created)
  hero: Hero = {
    name: 'Windstorm', id: 1
  };


  constructor() { 
    console.log(this.hero)

  }



  // initialization logic goes in this hook
  ngOnInit(): void {
  }

}
