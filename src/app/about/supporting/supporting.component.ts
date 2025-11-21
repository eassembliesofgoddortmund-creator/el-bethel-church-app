import {ChangeDetectorRef, Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-supporting',
  standalone:true,
  imports: [MatExpansionModule, MatIconModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './supporting.component.html',
  styleUrl: './supporting.component.scss'
})
export class SupportingComponent {

  linktreeUrl: string = 'https://linktr.ee/elbethelag';

  readonly panelOpenState = signal(false);
 // bankdetails = environment.bankDetails;

  bankDetailsImage: string | null = null;

  constructor(private firestore: Firestore,
              private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    await this.loadBankDetails();
  }

  // Load bank details image from Firestore
  async loadBankDetails() {
    try {
      // Assuming the bankdetails collection has a single document with id "main"
      const docRef = doc(this.firestore, 'bankdetails', '1');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.bankDetailsImage = docSnap.data()['bank_details'];
        this.cdr.detectChanges(); // manually trigger change detection
      } else {
        console.warn('No bank details found!');
      }
    } catch (error) {
      console.error('Error loading bank details:', error);
    }
  }

  // Open image in a new tab (optional)
  openBankDetails() {
    if (this.bankDetailsImage) {
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(`<img src="${this.bankDetailsImage}" style="width:100%">`);
      }
    }
  }


}
