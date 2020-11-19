import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
  @Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // This component receives a hero object through its hero property and displays it
  // external HeroesComponent binds to it <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
