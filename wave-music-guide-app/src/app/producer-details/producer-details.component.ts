import { Component, OnInit, Input } from '@angular/core';
import { Producer } from '../producer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProducerService }  from '../producer.service';

@Component({
  selector: 'app-producer-details',
  templateUrl: './producer-details.component.html',
  styleUrls: ['./producer-details.component.css']
})
export class ProducerDetailsComponent implements OnInit {
  @Input() producer: Producer;

  constructor(
    private route: ActivatedRoute,
    private producerService: ProducerService,
    private location: Location) { }

    ngOnInit(): void {
      this.getProducer();
    }

  getProducer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.producerService.getProducer(id)
      .subscribe(producer => this.producer = producer);
  }
}
