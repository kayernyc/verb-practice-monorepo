import { modifiedStem } from '../utilities/modifiedStem';

export const hydratePräsensSingular = (
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
