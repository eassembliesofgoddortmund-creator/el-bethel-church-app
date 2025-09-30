import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  churchName: string = 'El Bethel Assemblies of God e.V Dortmund';
  legalForm: string = 'Körperschaft des öffentlichen Rechts (KdöR)';
  address: string = 'Hannöversche Str. 22A, 44143 Dortmund';
  phone1: string = '+49 1775650008';
  phone2: string = '+49 1785302417';

  email: string = 'fredrick0@yahoo.com';
  authorizedRepresentative: string = 'Pastor Fredrick';
  website: string = '';

}
