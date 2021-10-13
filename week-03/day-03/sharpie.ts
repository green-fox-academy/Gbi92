class Sharpie {
  private _color: string;
  private _width: number;
  private _inkAmount: number = 100;

  constructor(color: string, width: number) {
    this._color = color;
    this._width = width;
  }

  public use(): void {
    this._inkAmount -= 10;
  }
}
