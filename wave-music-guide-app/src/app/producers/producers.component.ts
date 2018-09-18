import { Component, OnInit } from '@angular/core';
import { Producer } from '../producer';
import { PRODUCERS } from '../mock-producers';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {

  producers = PRODUCERS;
  selectedHero: Producer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Producer): void {
    this.selectedHero = hero;
  }

}
