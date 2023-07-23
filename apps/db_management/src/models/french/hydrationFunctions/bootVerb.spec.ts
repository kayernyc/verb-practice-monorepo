import { createStandardConjugation } from '@models/french/createStandardConjugation';
import { modifyBootVerb } from './bootVerbs';
import { altérerReturnObject, appelerReturnObject, broyerReturnObject, piégerReturnObject } from '@models/french/spec_constants/regularVerbs';

describe('modifyBootVerb', () => {
  it('updates altérer correctly', () => {
    const sourceVerb = createStandardConjugation('altérer');
    const modifiedVerb = modifyBootVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(altérerReturnObject);
  });

  it('updates appeler correctly', () => {
    const sourceVerb = createStandardConjugation('appeler');
    const modifiedVerb = modifyBootVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(appelerReturnObject);
  });

  it('updates piéger correctly', () => {
    const sourceVerb = createStandardConjugation('piéger');
    const modifiedVerb = modifyBootVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(piégerReturnObject);
  });

  it('updates broyer correctly', () => {
    const sourceVerb = createStandardConjugation('broyer');
    const modifiedVerb = modifyBootVerb(sourceVerb);

    expect(modifiedVerb).toStrictEqual(broyerReturnObject);
  });
});
