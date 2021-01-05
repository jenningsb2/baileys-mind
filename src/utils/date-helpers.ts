export function formatDate(date: Date): string | null {
  if (!date) return null;
  const options = { month: '2-digit', year: 'numeric', day: '2-digit' };
  const dateString = Intl.DateTimeFormat('en-US', options).format(date);

  return dateString?.replace(/\//gi, '-');
}
export function getYearFromDate(date: string): string {
  const year = date ? new Date(date).getFullYear().toString() : null;
  return year;
}
