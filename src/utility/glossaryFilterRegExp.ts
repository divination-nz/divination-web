export const createGlossaryFilterRegExp = (filter: string) =>
  new RegExp(`(${filter})`, 'gi');
