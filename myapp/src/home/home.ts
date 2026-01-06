import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // writeable Signal;
  data: WritableSignal<string | number | boolean> = signal<string | number | boolean>('nik');

  // computed signal;
  speed: Signal<number> = computed<number>(() => 90); // con;t update value

  handleData() {
    this.data.set('yadava'); // or
    this.data.set(true); //
    this.data.set(29);
  }

  //set vs update=====================================================================================================
  data1: WritableSignal<string> = signal<string>('nik');

  user: WritableSignal<string[]> = signal(['nik', 'piter', 'albert']);

  setData() {
    this.data1.set('yadav'); // becos "yadav" value not depend on privious value;
  }

  updateData() {
    // if i want add "bruce" in array its depend on privious value the we used update method
    this.user.update((item) => [...item, 'bruce']);
  }

  //====================================================================================================
  // computed signals exmpale
  x = 10;
  y = 20;
  z = this.x + this.y;

  showValue() {
    console.log(this.z); // 30
    this.x = 100;
    console.log(this.z); //30 (beacoz pahle hi adtion ho chuka hai)
  }

  //but i want if chnage any x ot y value then chnage also z value or i want updated z value

  // used computed
  x1 = signal(10);
  y1 = signal(20);
  z1 = computed(() => this.x1() + this.y1());

  showValue1() {
    console.log(this.z1()); // 30
    this.x1.set(100);
  }

  // ==================================================================================================
  // effect() ===> Effect ek fn() hai jo constructer ke under used hota jab signals upadte
  // hota hai to esse hame pta clta hai kya update or chnages hua hai.

  count = signal(0);
  message = signal('Effect will show updates here...');
  constructor() {
    effect(() => {
      this.message.set(`Count changed to: ${this.count()}`);
      console.log('Effect ran:', this.count());
    });
  }

  increment() {
    this.count.update((c) => c + 1);
  }
}
