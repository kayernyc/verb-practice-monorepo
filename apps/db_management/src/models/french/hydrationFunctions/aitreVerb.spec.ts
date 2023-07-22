import { createStandardConjugation } from '@models/french/createStandardConjugation';
import { modifyAitreVerbs } from './aitreVerb';
import { paraîtreReturnObject } from '@models/french/spec_constants/regularVerbs2';

describe('modifyBootVerb', () => {
  it('updates paraître correctly', () => {
    const sourceVerb = createStandardConjugation('paraître');
    const modifiedVerb = modifyAitreVerbs(sourceVerb);

    expect(modifiedVerb).toStrictEqual(paraîtreReturnObject);
  });
});