import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { BrowserModule, By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";

import { Router, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from '../dashboard-hero/dashboard-hero.component';

import { HeroService } from '../../services/hero.service';
import { HeroDetailService } from '../hero-detail/hero-detail.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardDe: DebugElement;
  let dashboardEl: HTMLElement;
  let HEROES;

  HEROES = [
      {"id": 1, "name": "Mukesh"},
      {"id": 2, "name": "Ankita"},
      {"id": 3, "name": "Mahesh"},
      {"id": 4, "name": "Paresh"}
    ];
  
  // getHeroSpy = heroServiceSpy.getHeroes.and.returnValue(of(testQuote));

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
    const heroServiceSpy = jasmine.createSpyObj("HeroService", [
      "getHeroes",
      "getHero"
    ]);

    const heroDetailServiceSpy = jasmine.createSpyObj("HeroDetailService", [
      "getHero"
    ]);

    heroServiceSpy.getHeroes.and.returnValue(of(HEROES));
    heroDetailServiceSpy.getHero.and.returnValue(of(HEROES[0]));


    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DashboardHeroComponent,
        HeroDetailComponent
      ],
      imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        HttpClientTestingModule 
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: HeroDetailService, useValue: heroDetailServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    
    dashboardDe = fixture.debugElement;
    dashboardEl = dashboardDe.nativeElement.querySelector('.dashboard');

    console.log(dashboardDe.nativeElement.textContent);

    fixture.detectChanges();

    console.log(dashboardDe);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /* 

  it('should tell ROUTER to navigate when hero clicked', () => {
    heroClick(); // trigger click on first inner <div class="hero">

    // args passed to router.navigateByUrl() spy
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];

    // expecting to navigate to id of the component's first hero
    const id = component.heroes[0].id;
    expect(navArgs).toBe('/heroes/' + id,
      'should nav to HeroDetail for first hero');
  }); */

  function heroClick() {
    // get first <dashboard-hero> DebugElement
    const heroDe = fixture.debugElement.query(By.css("dashboard-hero"));
      heroDe.triggerEventHandler("selected", component.heroes[0]);
  };

});


