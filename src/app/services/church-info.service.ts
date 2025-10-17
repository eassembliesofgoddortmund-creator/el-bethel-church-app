import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


interface ChurchInfo {
  time: string;
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class ChurchInfoService {
  private churchInfoSubject = new BehaviorSubject<ChurchInfo>({
    time: '10:00 AM',
    address: 'Hannöversche Str. 22A, 44143 Dortmund'
  });

  constructor() { }


  // Expose as Observable for other components
  churchInfo$ = this.churchInfoSubject.asObservable();

  // Method to update info
  updateChurchInfo(time: string, address: string) {
    this.churchInfoSubject.next({ time, address });
  }

  // Optional getters for quick access
  getCurrentInfo(): ChurchInfo {
    return this.churchInfoSubject.value;
  }
}
