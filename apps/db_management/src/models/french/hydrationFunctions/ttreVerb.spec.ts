import { battreReturnObject, commettreReturnObject, mettreReturnObject } from '@models/french/spec_constants/regularVerbs2';
import { modifyTtreVerb } from './ttreVerb';
import { createStandardConjugation } from '@models/french/createStandardConjugation';

describe('indre verb', () => {
  it('updates commettre correctly', () => {
    const sourceVerb = createStandardConjugation('commettre');
    const modifiedVerb = modifyTtreVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(commettreReturnObject);
  });

  it('updates battre correctly', () => {
    const sourceVerb = createStandardConjugation('battre');
    const modifiedVerb = modifyTtreVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(battreReturnObject);
  });

  it('updates mettre correctly', () => {
    const sourceVerb = createStandardConjugation('mettre');
    const modifiedVerb = modifyTtreVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(mettreReturnObject);
  });
});