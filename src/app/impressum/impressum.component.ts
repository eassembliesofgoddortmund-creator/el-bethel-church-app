import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-impressum',
  imports: [CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  // Basic Information
  churchName: string = 'El Bethel Assemblies of God e.V. Dortmund';
  legalForm: string = 'Eingetragener Verein (e.V.)';
  registerInfo: string = 'Vereinsregister Dortmund, VR [add your number if available]';
  address: string = 'Hannöversche Str. 22A, 44143 Dortmund';

  // Contact Information
  phone1: string = '+49 177 5650008';
  email: string = 'fredrick0@yahoo.com';
  website: string = 'https://www.elbetheldortmund.de'; // Add your real domain if available

  // Responsible Representatives
  authorizedRepresentative: string = 'Pastor Fredrick';
  contentResponsible: string = 'Pastor Fredrick';

}
