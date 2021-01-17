import {
  IReadingGroup,
  IReadingListItem,
  ReadingGroupType,
} from '@/@types/reading.types';
import { booksData } from '@/data/reading';

const shelveMap: { [x: number]: string } = {
  0: 'current',
  1: 'next',
  2: 'read',
};

function getNotes(book: any) {
  const b = booksData.find((data) => data.id === book.id);
  return {
    ...book,
    type: 'expansion',
    notes: b.notes,
  };
}

function hasNotes(book: any): boolean {
  const idMatch = booksData.find((data) => data.id === book.id);

  return idMatch ? true : false;
}

function parseGoogleBookData(
  books: any[],
): (IReadingListItem & { id: string })[] {
  if (!books || !Array.isArray(books)) return [];

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
    .reduce((result, curr) => {
      if (hasNotes(curr)) {
        result.push({ ...curr, ...getNotes(curr) });
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
      type: shelveMap[idx] as ReadingGroupType,
      books: parseGoogleBookData(shelve.items),
    };
  });
}
