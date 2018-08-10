import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../hero';


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit() {}

  gotoDetail(hero: Hero) {
    let url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }
}
