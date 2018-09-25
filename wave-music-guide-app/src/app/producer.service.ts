import { Injectable } from '@angular/core';
import { Producer } from './producer';
import { PRODUCERS } from './mock-producers';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProducerService {

  constructor(private producerService: ProducerService) { }

  getProducers(): Observable<Producer[]> {

    return of(PRODUCERS);
  }
 
  getProducer(id: number): Observable<Producer> {

    return of(PRODUCERS.find(producer => producer.id === id));
  }

}
