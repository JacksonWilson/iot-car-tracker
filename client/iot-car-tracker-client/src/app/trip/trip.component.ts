import { Component, OnInit } from '@angular/core';

export interface Trip {
  startDateTime: string;
  endDateTime: string;
  startLocation: { longitude: string, latitude: string };
  endLocation: { longitude: string, latitude: string };
  startMileage: string;
  endMileage: string;
  updatesReceived: string;
  gasUsed: string;
  averageSpeed: string;
}

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  trip: Trip = {
    startDateTime: "",
    endDateTime: "",
    startLocation: { latitude: "40", longitude: "80" },
    endLocation: { latitude: "40", longitude: "80" },
    startMileage: "",
    endMileage: "",
    updatesReceived: "",
    gasUsed: "",
    averageSpeed: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
