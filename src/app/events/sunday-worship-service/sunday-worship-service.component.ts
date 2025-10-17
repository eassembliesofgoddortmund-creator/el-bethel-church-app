import {Component, OnInit} from '@angular/core';
import {ChurchInfoService} from '../../services/church-info.service';

@Component({
  selector: 'app-sunday-worship-service',
  imports: [],
  templateUrl: './sunday-worship-service.component.html',
  styleUrl: './sunday-worship-service.component.scss'
})
export class SundayWorshipServiceComponent implements  OnInit{

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
