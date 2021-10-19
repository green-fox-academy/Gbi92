'use strict';

import { Reservationy } from './reservationy';

class Reservation implements Reservationy {
  private dow: string;
  private reservationCode: string;

  constructor() {
    this.dow = '';
    this.reservationCode = '';
  }

  getDowBooking(): string {
    let dowArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    this.dow += dowArray[Math.floor(Math.random() * dowArray.length)];
    return this.dow;
  }

  getCodeBooking(): string {
    let characters: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i: number = 0; i < 8; i++) {
      this.reservationCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return this.reservationCode;
  }
}

let booking1 = new Reservation();
console.log(
  `Booking# ${booking1.getCodeBooking()} for ${booking1.getDowBooking()}`
);
