import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  churchName: string = 'El Bethel AG e.V Dortmund';
  contactEmail: string = 'fredrick@yahoo.com';
  contactAddress: string = 'Hannöversche Str. 22A, 44143 Dortmund';
  dataProtectionOfficer: string = 'Rev Fredrick';
  dpoEmail: string = 'fredrick@yahoo.com';

}
