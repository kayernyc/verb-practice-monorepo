import { createStandardConjugation } from '@models/french/createStandardConjugation';
import { modifyRendreVerb } from './rendreVerb'
import { prendreReturnObject } from '@models/french/spec_constants/regularVerbs2';

describe('modifyRendreVerb', () => {
  it('updates prendre correctly', () => {
    const sourceVerb = createStandardConjugation('prendre');
    const modifiedVerb = modifyRendreVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(prendreReturnObject);
  })
});
