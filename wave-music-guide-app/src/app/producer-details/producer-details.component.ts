import { Component, OnInit, Input } from '@angular/core';
import { Producer } from '../producer';


@Component({
  selector: 'app-producer-details',
  templateUrl: './producer-details.component.html',
  styleUrls: ['./producer-details.component.css']
})
export class ProducerDetailsComponent implements OnInit {
  @Input() producer: Producer;

  constructor() { }

  ngOnInit() {
  }

}
