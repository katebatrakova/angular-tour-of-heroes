import { Component, OnInit } from '@angular/core';


// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  //hero property
  hero = 'Windstorm';



  constructor() { }



  // initialization logic goes in this hook
  ngOnInit(): void {
  }

}
