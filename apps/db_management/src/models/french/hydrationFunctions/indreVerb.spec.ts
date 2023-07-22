import { craindreReturnObject } from '@models/french/spec_constants/regularVerbs2';
import { modifyIndreVerb } from './indreVerb';
import { createStandardConjugation } from '@models/french/createStandardConjugation';

describe('indre verb', () => {
  it('updates craindre correctly', () => {
    const sourceVerb = createStandardConjugation('craindre');
    const modifiedVerb = modifyIndreVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(craindreReturnObject);
  });
});