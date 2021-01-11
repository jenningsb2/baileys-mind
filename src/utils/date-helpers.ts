export function formatDate(date: Date): string | null {
  // TODO: Fix bug where it moves the date back a day

  if (!date) return null;
  const options = {
    month: '2-digit',
    year: 'numeric',
    day: '2-digit',
    timeZone: 'America/New_York',
  };
  const dateString = Intl.DateTimeFormat('en-US', options).format(date);

  return dateString?.replace(/\//gi, '-');
}
export function getYearFromDate(date: string): string {
  const year = date ? new Date(date).getFullYear().toString() : null;
  return year;
}
