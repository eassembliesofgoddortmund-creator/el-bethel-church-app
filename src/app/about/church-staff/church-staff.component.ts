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
      name: 'Rev Pastor Fredrick',
      title: 'Senior Pastor',
      email: 'eassembliesofgoddortmund@gmail.com',
      photo: 'fredric_staff_member.png'
    },
    {
      name: 'Rev Pastor Fredrick',
      title: 'Senior Pastor',
      email: 'eassembliesofgoddortmund@gmail.com',
      photo: 'fredric_staff_member.png'
    },
    {
      name: 'Rev Pastor Fredrick',
      title: 'Senior Pastor',
      email: 'eassembliesofgoddortmund@gmail.com',
      photo: 'fredric_staff_member.png'
    },
    {
      name: 'Rev Pastor Fredrick',
      title: 'Senior Pastor',
      email: 'eassembliesofgoddortmund@gmail.com',
      photo: 'fredric_staff_member.png'
    },




  ];


}
