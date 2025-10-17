import {Component, OnInit} from '@angular/core';
import {ChurchInfoService} from '../../services/church-info.service';

@Component({
  selector: 'app-about-us',
  standalone:true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit  {

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
