import { processStemSubstitution } from '../utilities/processStemSubstitution';

export const hydratePräsensSingular = (
  regularStem: string,
  irregularStem: string,
  dropEndings = false,
) => {
  const newStem = processStemSubstitution({ regularStem, irregularStem });
  return [
    `${newStem}${dropEndings ? '' : 'e'}`,
    `${newStem}st`,
    `${newStem}${dropEndings ? '' : 't'}`,
  ];
};
