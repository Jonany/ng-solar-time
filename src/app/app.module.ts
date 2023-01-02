import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { DateComponent } from './components/date/date.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { SolarTimeComponent } from './components/solar-time/solar-time.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    DateComponent,
    CitySearchComponent,
    SolarTimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
