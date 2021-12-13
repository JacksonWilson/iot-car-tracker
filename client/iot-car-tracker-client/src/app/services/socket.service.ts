import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CarStatus } from '../components/car-status/car-status.component';
import { Trip } from '../components/trip/trip.component';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  carStatus = this.socket.fromEvent<CarStatus>('carStatus');
  trips = this.socket.fromEvent<Trip[]>('trips');

  constructor(private socket: Socket) {
    // this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  getCarStatus() {
    this.socket.emit('getCarStatus');
  }

  getTrips() {
    this.socket.emit('getTrips');
  }
}
