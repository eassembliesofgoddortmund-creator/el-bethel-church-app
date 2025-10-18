import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-marriage-and-family',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './marriage-and-family.component.html',
  standalone: true,
  styleUrl: './marriage-and-family.component.scss'
})
export class MarriageAndFamilyComponent {
  readonly panelOpenState = signal(false);

}
