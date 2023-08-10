import { NgModule } from '@angular/core';
import { CounterComponet } from './components/counter/counter.componet';



@NgModule({
  declarations: [
    CounterComponet
  ],
  exports: [
    CounterComponet
  ]
})
export class CounterModule {}
