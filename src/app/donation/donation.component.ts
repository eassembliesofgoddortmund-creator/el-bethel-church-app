import {ChangeDetectionStrategy, ChangeDetectorRef, Component, signal} from '@angular/core';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatIconModule} from '@angular/material/icon';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-donation',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatIconModule,
      CommonModule
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  readonly panelOpenState = signal(false);
 // bankdetails = environment.bankDetails;
  youtubeLink =""
  facebookLink = "https://www.facebook.com/p/Dortmund-Assemblies-100071161759271/";
  instagramLink ="https://www.instagram.com/Dortmund%20Assemblies"
  emailLink ="";

  linktreeUrl: string = 'https://linktr.ee/elbethelag';


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
