import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  churchName: string = 'El Bethel Assemblies of God e.V. Dortmund';
  contactAddress: string = 'Hannöversche Str. 22A, 44143 Dortmund';
  contactEmail: string = 'fredrick@yahoo.com';
  dataProtectionOfficer: string = 'Rev Fredrick G Nimako';
  dpoEmail: string = 'fredrick@yahoo.com';
  supervisoryAuthority: string = 'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)';
  hostingProvider: string = 'Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA';

}
