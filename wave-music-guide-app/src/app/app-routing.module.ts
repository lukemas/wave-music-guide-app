import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerDetailsComponent }  from './producer-details/producer-details.component';
import { ProducersComponent }      from './producers/producers.component';

const routes: Routes = [
  { path: 'detail/:id', component: ProducerDetailsComponent },
  { path: 'producers', component: ProducersComponent }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}