import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isLoggedIn = false;

  constructor(private router: Router,
              private route: ActivatedRoute ,
              private cdr: ChangeDetectorRef,
              private  authService:AuthService) {}

  ngOnInit(): void {

    // 🔑 subscribe to login state
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
      this.cdr.detectChanges();
    });
  }

}
