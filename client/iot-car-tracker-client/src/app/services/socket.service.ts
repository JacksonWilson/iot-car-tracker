import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CarStatus } from '../components/car-status/car-status.component';
import { Trip } from '../components/trip/trip.component';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentCarStatus = this.socket.fromEvent<CarStatus>('carStatus');
  trips = this.socket.fromEvent<Trip[]>('trips');

  constructor(private socket: Socket) { }

  getCurrentCarStatus() {
    this.socket.emit('getCarStatus');
  }
}
