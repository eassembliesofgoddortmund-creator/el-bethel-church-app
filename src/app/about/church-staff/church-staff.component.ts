import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-church-staff',
  standalone:true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './church-staff.component.html',
  styleUrl: './church-staff.component.scss'
})
export class ChurchStaffComponent {
 // defaultPhoto = 'assets/images/avatars/user-01.jpg'; // Add a placeholder image here
  staffMembers = [
    {
      name: 'Rev Prince Edos',
      title: 'Senior Pastor',
      email: 'edoprince2000@yahoo.com',
      photo: 'pastor_prince_edo.jpeg'
    },
    {
      name: 'Vivian Edos',
      title: 'Evangelist',
      email: 'edoprince2000@yahoo.com',
      photo: 'evangelist_vivian.jpeg'
    },
    {
      name: 'Ruben',
      title: 'Elder',
      email: '',
      photo: 'elder_ruben.jpeg'
    },
    {
      name: 'Jolly',
      title: 'Deacon',
      email: '',
      photo: 'jolly_deaco.jpeg'
    },
    {
      name: 'Isoken',
      title: 'Evangelist',
      email: '',
      photo: 'evangelist_isoken.jpeg'
    },
    {
      name: 'Smith',
      title: 'Deacon',
      email: '',
      photo: 'deacon_smith.png'

    },

    {
      name: 'Efosa ',
      title: 'Deacon',
      email: '',
      photo: 'elder_.jpeg'

    },

    {
      name: 'Precious ',
      title: 'Deaconess',
      email: '',
      photo: 'Deaconess_Precious.jpeg'

    },
  ];


}
