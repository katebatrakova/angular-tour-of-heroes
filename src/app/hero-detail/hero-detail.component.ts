import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
//  location is a service for interacting with the browser
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

  @Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // This component receives a hero object through its hero property and displays it
  // external HeroesComponent binds to it <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  @Input() hero: Hero;

  constructor(
      private route: ActivatedRoute, // holds information about the route to this instance of the HeroDetailComponent
      private heroService: HeroService,
      private location: Location
  ) { }

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {
      // route.snapshot is a static image of the route information shortly after the component was created
      // (+) operator converts the string to a number
      const id = +this.route.snapshot.paramMap.get('id'); //paramMap holds route parameter values extracted from the URL
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    // navigate backward one step in the browser's history stack
    goBack(): void {
      this.location.back();
    }


    //  save() persists hero name changes using the hero service updateHero() method
    save(): void {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }

}
