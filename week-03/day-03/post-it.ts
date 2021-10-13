class PostIt {
  private _backgroundColor: string;
  private _text: string;
  private _textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this._backgroundColor = backgroundColor;
    this._text = text;
    this._textColor = textColor;
  }
}

let post1 = new PostIt('orange', 'Idea 1', 'blue');
let post2 = new PostIt('pink', 'Awesome', 'black');
let post3 = new PostIt('yellow', 'Superb!', 'green');

console.log(post2);
