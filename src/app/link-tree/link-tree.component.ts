import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-link-tree',
  imports: [],
  templateUrl: './link-tree.component.html',
  styleUrl: './link-tree.component.scss'
})
export class LinkTreeComponent {

  linktreeUrl: string = 'https://linktr.ee/elbethelag';

  openLinktree(): void {
    window.open(this.linktreeUrl, '_blank');
  }

}
