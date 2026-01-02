import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
