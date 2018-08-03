import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { TwainComponent } from './twain.component';
import { of } from 'rxjs';

describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let TwainService;
  let testQuote;
  let getQuoteSpy;
  let quoteDe: DebugElement;
  let quoteEl: HTMLElement;

  beforeEach(async(() => {
    testQuote = "Test Quote";

    // Create a fake TwainService object with a `getQuote()` spy
    const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
    // Make the spy return a synchronous Observable with the test data
    getQuoteSpy = twainService.getQuote.and.returnValue( of(testQuote) );

    TestBed.configureTestingModule({
      declarations: [ TwainComponent ],
      providers:    [
      { provide: TwainService, useValue: twainService }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    quoteDe = fixture.debugElement;
    quoteEl = fixture.nativeElement.querySelector(".twain");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show quote after component initialized", () => {
    fixture.detectChanges(); // onInit()

    console.log(quoteDe);

    console.log(quoteEl.textContent);
    console.log(testQuote);
    // sync spy result shows testQuote immediately after init
    expect(quoteEl.textContent).toBe(testQuote);
    expect(getQuoteSpy.calls.any()).toBe(true, "getQuote called");
  });
  
});
