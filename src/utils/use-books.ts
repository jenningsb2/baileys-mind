import useSWR from 'swr';
import { transformBookData } from './book-data-helpers';

export const fetcher = async (url: string) => {
  const user = '113263604545639247723';
  const key = process.env.NEXT_PUBLIC_BOOKS_API_KEY;
  const shelves = [3, 2, 4];
  return Promise.all(
    shelves.map((shelve) => {
      return fetch(`${url}/${user}/bookshelves/${shelve}/volumes?key=${key}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }),
  ).then((responses) => {
    return Promise.all(
      responses.map((res) => {
        return res.json();
      }),
    );
  });
};
export function useBooks() {
  const query = `https://www.googleapis.com/books/v1/users`;
  const { data, error } = useSWR(query, fetcher);

  const books = transformBookData(data);

  return {
    books,
    isLoading: !error && !(<any>data),
    isError: error, // TODO: Should actually use error in the UI
  };
}
