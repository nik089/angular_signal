import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
   imports: [RouterModule] 
})
export class Header {
  mobileOpen = false;
  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }
}