import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


interface ChurchInfo {
  englishServiceTime: string;
  twiServiceTime: string;
  sundaySchoolServiceTime: string;
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class ChurchInfoService {
  private churchInfoSubject = new BehaviorSubject<ChurchInfo>({
    englishServiceTime: '10:00 AM',
    twiServiceTime: '2:00 PM',
    sundaySchoolServiceTime: '11:30 AM',
    address: 'Hannöversche Str. 22A, 44143 Dortmund'
  });

  constructor() { }


  // Expose as Observable for other components
  churchInfo$ = this.churchInfoSubject.asObservable();

  // Method to update info
  // ✅ Update all fields dynamically
  updateChurchInfo(
    englishServiceTime: string,
    twiServiceTime: string,
    sundaySchoolServiceTime: string,
    address: string
  ) {
    this.churchInfoSubject.next({
      englishServiceTime,
      twiServiceTime,
      sundaySchoolServiceTime,
      address
    });
  }

  // Optional getters for quick access
  getCurrentInfo(): ChurchInfo {
    return this.churchInfoSubject.value;
  }
}
