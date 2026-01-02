import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,  
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
 count = signal(0);
 
  increment() {
    this.count.set(this.count() + 1)
  }
  decrement() {
    if(this.count() >= 1){
    this.count.set(this.count() - 1)
    }
  }
  
  reset() {
    this.count.set(0)
  }
}
