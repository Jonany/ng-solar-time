import { Component, OnInit } from '@angular/core';
import { JulianDateService } from 'src/app/services/julian-date.service';
import { SolarPositionService } from 'src/app/services/solar-position.service';

@Component({
  selector: 'app-solar-time',
  templateUrl: './solar-time.component.html',
  styleUrls: ['./solar-time.component.sass']
})
export class SolarTimeComponent implements OnInit {

  constructor(
    private _solarPositionService: SolarPositionService,
    private _julianDateService: JulianDateService
  ) { }

  public solarTime: string = '';
  public longitude: number = -71.2463;

  ngOnInit(): void {
    this.setSolarNoon();
  }

  timeString(minutes: number, flag: number): string {
    if ( (minutes >= 0) && (minutes < 1440) ) {
      var floatHour = minutes / 60.0;
      var hour = Math.floor(floatHour);
      var floatMinute = 60.0 * (floatHour - Math.floor(floatHour));
      var minute = Math.floor(floatMinute);
      var floatSec = 60.0 * (floatMinute - Math.floor(floatMinute));
      var second = Math.floor(floatSec + 0.5);
      if (second > 59) {
        second = 0
        minute += 1
      }
      if ((flag == 2) && (second >= 30)) minute++;
      if (minute > 59) {
        minute = 0
        hour += 1
      }
      var output = hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0');
      if (flag > 2) output = output + ":" + second.toString().padStart(2, '0');
    } else { 
      var output = "error"
    }
  
    return output;
  }

  longChanged(): void {
    this.setSolarNoon();
  }

  setSolarNoon(): void {
    const now = new Date(); 
    let solarNoon = this._solarPositionService.calcSolNoon(
      this._julianDateService.getJD(now.getFullYear(), now.getMonth(), now.getDate()),
      this.longitude,
      -5
    );
    this.solarTime = this.timeString(solarNoon, 3);
    let eqOfTime = this._solarPositionService.calcEquationOfTime(Date.parse(now.toString()));
    let sunApLong = this._solarPositionService.calcSunApparentLong(Date.parse(now.toString()));
    console.log(eqOfTime);
  }

  calcDayOfYear(date?: Date): number {
    const nowDate = date ?? new Date();
    const now: number = nowDate.valueOf();
    const yearStateDate: Date = new Date(nowDate.getFullYear(), 0, 0);
    const yearStart: number = yearStateDate.valueOf();
    const yearToDayDiff: number = (now - yearStart) + ((yearStateDate.getTimezoneOffset() - nowDate.getTimezoneOffset()) * 60 * 1000);
    const oneDay: number = 1000 * 60 * 60 * 24;
    return Math.round(yearToDayDiff / oneDay);
  }

  calcLstmInHours(diffFromUtc?: number): number {
    const now = new Date();
    const diff: number = diffFromUtc ?? (now.getTimezoneOffset() / 60);
    return 15 * diff;
  }

  calcEquationOfTime(dayOfYear: number): number {
    const circleDay = 0.9863013698630136;
    const B = circleDay * (dayOfYear - 81);
    return 9.87 * (Math.sin(2*B)) - (7.53*Math.cos(B)) - (1.5*Math.sin(B));
  }

  calcTimeCorrection(long: number, lstm: number, eot: number): number {
    return 4 * (long - lstm) + eot;
  }

  calcLocalSolarTime(localTime: number, timeCorrection: number): number {
    return localTime + (timeCorrection / 60);
  }

}
