export function chunkArray<T>(arr: T[], size: number): T[][] {
  if (!Array.isArray(arr)) return [];
  const newArray: T[][] = [];

  const arrCopy = [...arr];

  while (arrCopy.length > 0) {
    newArray.push(arrCopy.splice(0, size));
  }

  return newArray;
}
