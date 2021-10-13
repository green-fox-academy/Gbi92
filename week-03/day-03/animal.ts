class Animal {
  private _hunger: number = 50;
  private _thirst: number = 50;

  public eat(): void {
    this._hunger--;
  }

  public drink(): void {
    this._thirst--;
  }

  public play(): void {
    this._hunger++;
    this._thirst++;
  }
}
