import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-marriage-restoration',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './marriage-restoration.component.html',
  standalone: true,
  styleUrl: './marriage-restoration.component.scss'
})
export class MarriageRestorationComponent {
  readonly panelOpenState = signal(false);


}
