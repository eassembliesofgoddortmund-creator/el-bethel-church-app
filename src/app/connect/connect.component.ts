import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-connect',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {

  youtubeLink =""
  facebookLink = "https://www.facebook.com/p/Dortmund-Assemblies-100071161759271/";
  instagramLink ="https://www.instagram.com/Dortmund%20Assemblies"
  emailLink ="";

}
