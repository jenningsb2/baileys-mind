import {
  IBookData,
  IReadingGroup,
  IReadingListItem,
  IReadingListItemExpansion,
  ReadingGroupType,
} from '@/@types/reading.types';
import { booksData } from '@/data/reading';

const shelveMap: { [x: number]: string } = {
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

function parseGoogleBookData(books: any[]): IReadingListItem[] {
  if (books == null || !Array.isArray(books)) return [];

  return books
    .map(({ volumeInfo, id }) => {
      const { title, description, imageLinks } = volumeInfo;
      return {
        id,
        title,
        description,
        image: imageLinks.smallThumbnail,
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

export function transformBookData(data: any[]): IReadingGroup[] {
  if (!data) return [];

  return data.map((shelve, idx) => {
    return {
      type: <ReadingGroupType>shelveMap[idx],
      books: parseGoogleBookData(shelve.items),
    };
  });
}
