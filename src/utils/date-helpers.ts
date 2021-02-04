import { WritingsData } from '@/@types/writings-data';
import { compareDesc } from 'date-fns';

export function getYearFromDate(date: string): string {
  const year = date ? new Date(date).getFullYear().toString() : null;
  return year;
}

/**
 * sorts dates in Desc order
 */
export function sortWritingsByDateDesc(
  writings: WritingsData[],
): WritingsData[] {
  if (!Array.isArray(writings)) return [];

  return [...writings].sort(({ metaData: a }, { metaData: b }) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
  );
}

export function groupDatesByYear(writings: WritingsData[]) {
  return Object.entries(
    writings.reduce((result, value) => {
      if (result[value.metaData.year] === undefined) {
        result[value.metaData.year] = [];
      }
      result[value.metaData.year].push(value);
      return result;
    }, {} as { [x: string]: WritingsData[] }),
  )
    .map(([key, value]) => ({
      year: key,
      writings: value,
    }))
    .reverse();
}
