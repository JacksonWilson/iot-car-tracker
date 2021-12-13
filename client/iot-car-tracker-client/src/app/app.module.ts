import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './components/trip/trip.component';
import { CarStatusComponent } from './components/car-status/car-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    CarStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
