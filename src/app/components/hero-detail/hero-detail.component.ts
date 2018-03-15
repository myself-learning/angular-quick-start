import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero, states } from '../../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()), // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });

    this.heroForm.setValue({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

}
