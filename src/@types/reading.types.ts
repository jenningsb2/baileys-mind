export type ReadingGroupType = 'current' | 'next' | 'read';

export interface IBookData {
  description: string;
  title: string;
  image: string;
  href: string;
}

export interface IReadingListItemLink extends IBookData {
  type: 'link';
}

// TODO: Add external link to book in addition to note
export interface IReadingListItemExpansion extends IBookData {
  type: 'expansion';
  notes: [
    {
      title: string;
      href: string;
    },
  ];
}

export type IReadingListItem = IReadingListItemLink | IReadingListItemExpansion;

export interface IReadingGroup {
  type: ReadingGroupType;
  books: IReadingListItem[];
}
