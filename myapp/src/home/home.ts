import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
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

  //set vs update

  data1: WritableSignal<string> = signal<string>('nik');

  user: WritableSignal<string[]> = signal(['nik', 'piter', 'albert']);

  setData() {
    this.data1.set('yadav'); // becos "yadav" value not depend on privious value;
  }

  updateData() {
    // if i want add "bruce" in array its depend on privious value the we used update method
    this.user.update((item) => [...item, 'bruce']);
  }
}
