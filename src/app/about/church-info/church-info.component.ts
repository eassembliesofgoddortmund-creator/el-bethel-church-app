import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ChurchInfoService} from '../../services/church-info.service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {ChurchInfo, ChurchInformationService} from '../../services/church-information.service';

@Component({
  selector: 'app-church-info',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './church-info.component.html',
  styleUrl: './church-info.component.scss'
})
export class ChurchInfoComponent implements OnInit {
  showUpdateForm = false;

  // Existing fields
  englishServiceTime = '';
  twiServiceTime ='';
  sundaySchoolServiceTime = '';
  address = '';

  // New fields
  prayerMeetingDay = '';
  prayerMeetingTime = '';
  prayerMeetingAddress = '';

  bibleStudies = '';
  bibleStudiesTime = '';
  bibleStudiesAddress = '';

  midnightServiceDay = '';
  midnightServiceTime = '';
  midnightServiceAddress = '';

  prayerServiceDay = '';
  prayerServiceTime = '';
  prayerServiceAddress = '';

  currentInfo$!: Observable<ChurchInfo>;

  constructor(private churchInfoService: ChurchInformationService) {}

  ngOnInit() {
    this.currentInfo$ = this.churchInfoService.churchInfo$;

    const info = this.churchInfoService.getCurrentInfo();
    this.englishServiceTime = info.englishServiceTime;
    this.sundaySchoolServiceTime = info.sundaySchoolServiceTime;
    this.address = info.address;

    this.prayerMeetingDay = info.prayerMeetingDay;
    this.prayerMeetingTime = info.prayerMeetingTime;
    this.prayerMeetingAddress = info.prayerMeetingAddress;

    this.bibleStudies = info.bibleStudies;
    this.bibleStudiesTime = info.bibleStudiesTime;
    this.bibleStudiesAddress = info.bibleStudiesAddress;

    this.midnightServiceDay = info.midnightServiceDay;
    this.midnightServiceTime = info.midnightServiceTime;
    this.midnightServiceAddress = info.midnightServiceAddress;

    this.prayerServiceDay = info.prayerServiceDay;
    this.prayerServiceTime = info.prayerServiceTime;
    this.prayerServiceAddress = info.prayerServiceAddress;
  }

  toggleUpdateForm() {
    this.showUpdateForm = !this.showUpdateForm;
  }
  onUpdate() {
    const updatedInfo: ChurchInfo = {
      englishServiceTime: this.englishServiceTime,
      twiServiceTime: this.twiServiceTime,

      sundaySchoolServiceTime: this.sundaySchoolServiceTime,
      address: this.address,

      prayerMeetingDay: this.prayerMeetingDay,
      prayerMeetingTime: this.prayerMeetingTime,
      prayerMeetingAddress: this.prayerMeetingAddress,

      bibleStudies: this.bibleStudies,
      bibleStudiesTime: this.bibleStudiesTime,
      bibleStudiesAddress: this.bibleStudiesAddress,

      midnightServiceDay: this.midnightServiceDay,
      midnightServiceTime: this.midnightServiceTime,
      midnightServiceAddress: this.midnightServiceAddress,

      prayerServiceDay: this.prayerServiceDay,
      prayerServiceTime: this.prayerServiceTime,
      prayerServiceAddress: this.prayerServiceAddress
    };

    this.churchInfoService.updateChurchInfo(updatedInfo).subscribe({
      next: () => {
        alert('✅ Church info updated successfully!');
        this.showUpdateForm = false;
      },
      error: (err) => {
        console.error(err);
        alert('❌ Failed to update church info.');
      }
    });
  }


}
