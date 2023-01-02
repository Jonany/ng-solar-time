import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit {

  constructor() { }

  public LocalDate: string = '2021-10-10';
  public LocalTime: string = '1200';

  ngOnInit(): void {
  }

  useCurrentClicked(): void {
    const now = new Date();
    this.LocalDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    this.LocalTime = `${now.toTimeString()}`;
  }
}
