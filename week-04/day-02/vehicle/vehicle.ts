'use strict';

export abstract class Vehicle {
  protected color: string;
  protected speed: number;
  protected age: number;

  constructor(color: string, speed: number, age: number) {
    this.color = color;
    this.speed = speed;
    this.age = age;
  }
}
