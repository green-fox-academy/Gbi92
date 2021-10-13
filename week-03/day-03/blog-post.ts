class BlogPost {
  private _authorName: string;
  private _title: string;
  private _text: string;
  private _publicationDate: string;

  constructor(
    authorName: string,
    title: string,
    text: string,
    publicationDate: string
  ) {
    this._authorName = authorName;
    this._title = title;
    this._text = text;
    this._publicationDate = publicationDate;
  }

  public describe(): void {
    console.log(
      `"${this._title}" titled by ${this._authorName} posted at "${this._publicationDate}" \n ${this._text}`
    );
  }
}

let blog1 = new BlogPost(
  'John Doe',
  'Lorem Ipsum',
  'Lorem ipsum dolor sit amet.',
  '2000.05.04.'
);
let blog2 = new BlogPost(
  'Tim Urban',
  'Wait but why',
  'A popular long-form, stick-figure-illustrated blog about almost everything.',
  '2010.10.10.'
);
let blog3 = new BlogPost(
  'William Turton',
  'One Engineer Is Trying to Get IBM to Reckon With Trump',
  `Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.`,
  '2017.03.28.'
);

blog3.describe();
