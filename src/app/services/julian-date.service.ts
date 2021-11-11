import { Injectable } from '@angular/core';
import { DateOnly } from '../interfaces/date-only';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class JulianDateService {

  constructor(private _dateService: DateService) { }

  getJD(year: number, month: number, day: number) {
    if (month <= 2) {
      year -= 1
      month += 12
    }
    var A = Math.floor(year/100)
    var B = 2 - A + Math.floor(A/4)
    var JD = Math.floor(365.25*(year + 4716)) + Math.floor(30.6001*(month+1)) + day + B - 1524.5
    return JD
  }

  calcTimeJulianCent(jd: number): number {
    return (jd - 2451545.0) / 36525.0;
  }
  
  calcJDFromJulianCent(century: number): number {
    return century * 36525.0 + 2451545.0;
  }
  
  calcDateFromJD(jd: number): DateOnly {
    const z = Math.floor(jd + 0.5);
    const f = (jd + 0.5) - z;
    let A = 0;
    
    if (z < 2299161) {
      A = z;
    } else {
      const alpha = Math.floor((z - 1867216.25)/36524.25);
      A = z + 1 + alpha - Math.floor(alpha/4);
    }
    const B = A + 1524;
    const C = Math.floor((B - 122.1)/365.25);
    const D = Math.floor(365.25 * C);
    const E = Math.floor((B - D)/30.6001);
    const day = B - D - Math.floor(30.6001 * E) + f;
    const month = (E < 14) ? E - 1 : E - 13;
    const year = (month > 2) ? C - 4716 : C - 4715;
  
    return {"year": year, "month": month, "day": day}
  }
  
  calcDayOfYearFromJD(jd: any): number {
    const date: DateOnly = this.calcDateFromJD(jd)
  
    const offset: number = this._dateService.isLeapYear(date.year) ? 1 : 2;
    const dayOfYear = Math.floor((275 * date.month) / 9) - offset * Math.floor((date.month + 9) / 12) + date.day -30;
  
    return dayOfYear;
  }
}
