'use strict';

import { Printable } from './printable';

export class Todo implements Printable {
  private task: string;
  private priority: string;
  private done: boolean;

  constructor(task: string, priority: string, done: boolean) {
    this.task = task;
    this.priority = priority;
    this.done = done;
  }

  public getTask(): string {
    return this.task;
  }

  public getPriority(): string {
    return this.priority;
  }

  public getDone(): boolean {
    return this.done;
  }

  printAllFields(): void {
    console.log(
      `Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`
    );
  }
}
