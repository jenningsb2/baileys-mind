export function getYearFromDate(date: string): string {
  const year = date ? new Date(date).getFullYear().toString() : null;
  return year;
}
