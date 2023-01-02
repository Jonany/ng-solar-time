import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  constructor() { }

  // public TimeZones: string[] = timeZones;
  @Output() LocationChange: EventEmitter<string> = new EventEmitter<string>(true);

  ngOnInit(): void {
  }

  locationChanged(): void {
    this.LocationChange.emit("CHANGED");
  }

}
