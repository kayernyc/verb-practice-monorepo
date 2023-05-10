import { modifiedStem } from './modifiedStem';

export const präsensSingular = (
  stem: string,
  irregularStem: string,
  dropEndings = false,
) => {
  const newStem = modifiedStem(stem, irregularStem);

  return [
    `${newStem}${dropEndings ? '' : 'e'}`,
    `${newStem}st`,
    `${newStem}${dropEndings ? '' : 't'}`,
  ];
};
