import {
  IBookData,
  IReadingGroup,
  IReadingListItem,
  IReadingListItemExpansion,
  ReadingGroupType,
} from '@/@types/reading.types';
import { booksData } from '@/data/reading';

const shelfMap: { [x: number]: string } = {
  0: 'current',
  1: 'next',
  2: 'read',
};

function getNotes(book: IBookData): IReadingListItemExpansion {
  const b = booksData.find((data) => data.id === book.id);
  return {
    ...book,
    type: 'expansion',
    notes: b.notes,
  };
}

function hasNotes(book: IBookData): boolean {
  const idMatch = booksData.find((data) => data.id === book.id);

  return idMatch != null ? true : false;
}

function swapProtocol(url: string): string {
  const regex = /^http:/;
  if (regex.test(url)) {
    return url.replace(regex, 'https:');
  }

  return url;
}

function parseGoogleBookData(books: any[]): IReadingListItem[] | [] {
  if (books == null || !Array.isArray(books)) return [];

  return books
    .map(({ volumeInfo, id }) => {
      const { title, description, imageLinks } = volumeInfo;
      return {
        id,
        title,
        description,
        image: swapProtocol(imageLinks.smallThumbnail),
        href: `https://books.google.com/books?id=${id}`,
      };
    })
    .reduce((result: IReadingListItem[], curr: IBookData) => {
      if (hasNotes(curr)) {
        result.push(getNotes(curr));
      } else {
        result.push({ ...curr, type: 'link' });
      }
      return result;
    }, []);
}

export function transformBookData(data: any[]): IReadingGroup[] | [] {
  if (data == null) return [];

  return data.map((shelf, idx) => {
    return {
      type: <ReadingGroupType>shelfMap[idx],
      books: parseGoogleBookData(shelf.items),
    };
  });
}
