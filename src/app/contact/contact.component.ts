import {Component, OnInit} from '@angular/core';
import {ChurchInfoService} from '../services/church-info.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  email ="eassembliesofgoddortmund@gmail.com";
  phone1="+49-1785302417, +49-15778495163";
  phone2="+49-1775650008, +49-15772325065"
  serviceTime = '';
  serviceAddress = '';

  constructor(private churchInfoService: ChurchInfoService) {}

  ngOnInit(): void {
    this.churchInfoService.churchInfo$.subscribe(info => {
      this.serviceTime = info.time;
      this.serviceAddress = info.address;
    });

  }

}
