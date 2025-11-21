import { Injectable } from '@angular/core';
import {BehaviorSubject, from, tap} from 'rxjs';
import {doc, docData, Firestore, setDoc} from '@angular/fire/firestore';

export interface ChurchInfo {
  englishServiceTime: string;
  twiServiceTime:string;
  sundaySchoolServiceTime: string;
  address: string;
  prayerMeetingDay: string;
  prayerMeetingTime: string;
  prayerMeetingAddress: string;
  bibleStudies: string;
  bibleStudiesTime: string;
  bibleStudiesAddress: string;
  midnightServiceDay: string;
  midnightServiceTime: string;
  midnightServiceAddress: string;
  prayerServiceDay: string;
  prayerServiceTime: string;
  prayerServiceAddress: string;
}
@Injectable({
  providedIn: 'root'
})
export class ChurchInformationService {

  private churchInfoSubject =new BehaviorSubject<ChurchInfo>({
    englishServiceTime: '10:00 AM',
    twiServiceTime: '12:30 PM',
    sundaySchoolServiceTime: '11:30 AM',
    address: 'Hannöversche Str. 22A, 44143 Dortmund, Germany',
    prayerMeetingDay: 'Wednesday',
    prayerMeetingTime: '6:00 PM to 7:30 PM',
    prayerMeetingAddress: 'Hannöversche Str. 22A, 44143 Dortmund, Germany',

    bibleStudies: 'Every Wednesday',
    bibleStudiesTime: '7:00 PM - 8:30 PM',
    bibleStudiesAddress: "Hannöversche Str. 22A, 44143 Dortmund, Germany",

    midnightServiceDay: 'Last Friday of the Month',
    midnightServiceTime: '10:00 PM - 2:00 AM',
    midnightServiceAddress: 'Hannöversche Str. 22A, 44143 Dortmund, Germany',

    prayerServiceDay: 'Every Friday',
    prayerServiceTime: '6:00 PM - 8:00 PM',
    prayerServiceAddress: 'Hannöversche Str. 22A, 44143 Dortmund, Germany'
  });

  churchInfo$ = this.churchInfoSubject.asObservable();

  constructor(private firestore: Firestore) {
    // Load initial data from Firestore
    const docRef = doc(this.firestore, 'church', 'info');
    docData(docRef).subscribe({
      next: (data: any) => {
        if (data) {
          this.churchInfoSubject.next(data as ChurchInfo);
        }
      },
      error: (err) => console.error('Error loading church info:', err)
    });
  }

  // ✅ Accepts the entire ChurchInfo object
  updateChurchInfo(updatedInfo: ChurchInfo) {
    const docRef = doc(this.firestore, 'church', 'info');

    // Save to Firestore and update BehaviorSubject
    return from(setDoc(docRef, updatedInfo)).pipe(
      tap(() => this.churchInfoSubject.next(updatedInfo))
    );
  }

  getCurrentInfo(): ChurchInfo {
    return this.churchInfoSubject.value;
  }
}
