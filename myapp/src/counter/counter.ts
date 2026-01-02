import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,  
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
 count = signal(0);
 
 constructor(){
  effect(()=>{
    console.log("counter check", this.count())
  })
 }
 
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
