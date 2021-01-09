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
