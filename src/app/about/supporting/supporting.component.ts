import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-supporting',
  standalone:true,
  imports: [MatExpansionModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './supporting.component.html',
  styleUrl: './supporting.component.scss'
})
export class SupportingComponent {

  linktreeUrl: string = 'https://linktr.ee/elbethelag';

  readonly panelOpenState = signal(false);
 // bankdetails = environment.bankDetails;


}
