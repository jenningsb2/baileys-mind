import { WritingsData } from '@/@types/writings-data';
import { compareDesc } from 'date-fns';
import _ from 'lodash';

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
  return [...writings].sort(({ metaData: a }, { metaData: b }) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
  );
}

export function groupDatesByYear(writings: WritingsData[]) {
  return _(writings)
    .groupBy((writing) => writing.metaData.year)
    .map((value, key) => ({ year: key, writings: value }))
    .value()
    .reverse();
}
