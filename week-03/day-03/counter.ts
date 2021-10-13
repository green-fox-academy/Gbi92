export class Counter {
  private _counter: number;
  private _initialCounter: number;

  constructor(counter?: number) {
    if (counter) {
      this._counter = counter;
      this._initialCounter = counter;
    } else {
      this._counter = 0;
      this._initialCounter = 0;
    }
  }

  public add(increaser?: number): void {
    this._counter += increaser ?? 1;
  }

  public get(): number {
    return this._counter;
  }

  public reset(): void {
    this._counter = this._initialCounter;
  }
}
