export function extractUniqueValues(arr: any[], extractFor: string): any[] {
  const uniqueValues: Set<any> = new Set();

  arr.forEach(obj => {
    if (obj.hasOwnProperty(extractFor)) {
      uniqueValues.add(obj[extractFor]);
    }
  });

  return Array.from(uniqueValues);
}
