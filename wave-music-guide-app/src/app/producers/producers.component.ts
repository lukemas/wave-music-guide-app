import { Component, OnInit } from '@angular/core';
import { Producer } from '../producer';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {

  producers : Producer[];
  selectedProducer: Producer;

  constructor(private producerService: ProducerService) { }

  ngOnInit() {
    this.getProducers();
  }

  onSelect(producer: Producer): void {
    this.selectedProducer = producer;
  }

  getProducers(): void {
   this.producerService.getProducers()
   .subscribe(producers => this.producers = producers);
  }

}
