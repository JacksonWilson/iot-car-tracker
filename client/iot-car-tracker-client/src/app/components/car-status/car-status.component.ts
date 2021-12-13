import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';

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
export class CarStatusComponent implements OnInit, OnDestroy {
  carStatus: CarStatus | undefined;
  private _carStatusSub: Subscription | undefined;

  // status: CarStatus = {
  //   gasLevel: "40",
  //   gearSelected: "Park",
  //   location: { latitude: "40", longitude: "80" },
  //   odometer: "125000",
  //   speed: "0",
  //   time: "6:32",
  //   vin: "31231241412"
  // }

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this._carStatusSub = this.socketService.carStatus.subscribe(status => this.carStatus = status);
    this.socketService.getCarStatus();
  }

  ngOnDestroy() {
    this._carStatusSub?.unsubscribe();
    this._carStatusSub = undefined;
  }
}
