import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  
  isLeapYear(year: number): boolean {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
  }
}
