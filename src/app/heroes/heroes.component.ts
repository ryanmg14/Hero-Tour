import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //creates Hero object called selectedHero
  selectedHero: Hero;
  //on selecting a Hero object called hero it triggers this
  onSelect(hero:Hero): void {
    //this assigns hero to selectedHero
    this.selectedHero = hero;
  }
  //Var heroes is assigned the HEROES object that comes from ./mock-heroes
  // heroes = HEROES;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
