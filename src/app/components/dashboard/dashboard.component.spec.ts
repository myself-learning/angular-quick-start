import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from '../dashboard-hero/dashboard-hero.component';

import { HeroService } from '../../services/hero.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardDe: DebugElement;
  let dashboardEl: HTMLElement;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, DashboardHeroComponent],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
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
  });/* 

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


