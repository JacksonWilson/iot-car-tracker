import { Component, OnInit } from '@angular/core';

export interface CarStatus {
  gearSelected: string;
  gasLevel: string;
  speed: string;
  location: { longitude: string, latitude: string };
  odometer: string;
  vin: string;
  time: string;
}

@Component({
  selector: 'app-car-status',
  templateUrl: './car-status.component.html',
  styleUrls: ['./car-status.component.scss']
})
export class CarStatusComponent implements OnInit {

  status: CarStatus = {
    gasLevel: "40",
    gearSelected: "Park",
    location: { latitude: "40", longitude: "80" },
    odometer: "125000",
    speed: "0",
    time: "6:32",
    vin: "31231241412"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
