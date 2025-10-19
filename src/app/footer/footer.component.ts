import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ChurchInfoService} from '../services/church-info.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent  implements OnInit {


  serviceTime = '';
  serviceAddress = '';

  constructor(private churchInfoService: ChurchInfoService) {}

  ngOnInit(): void {
    this.churchInfoService.churchInfo$.subscribe(info => {
      this.serviceTime = info.englishServiceTime;
      this.serviceAddress = info.address;
    });

  }

}
