import { Component } from '@angular/core';
import { Trip } from './components/trip/trip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iot-car-tracker-client';
  connectionStatus = "Connected";

  trips: Trip[] = [];
}
