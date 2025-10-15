import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-floating-button',
  imports: [MatIconModule, NgIf],
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.scss'
})
export class FloatingButtonComponent {

  constructor(private  router:Router) {
  }
  showPreloader = false;


  onClick() {



    this.router.navigate(['know-god/who-jesus']);

    // You can route or trigger any action here
  }

  togglePreloader() {
    this.showPreloader = true;

    setTimeout(() => {
      this.showPreloader = false;
      this.router.navigate(['know-god/who-jesus']); // ✅ navigate after delay
    }, 2000); // 3 seconds = 3000 ms
  }

}
