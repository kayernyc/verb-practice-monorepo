import { hydrateVerb } from '@german/hydrateGermanVerb';

import {
  werdenGermanVerb,
  werdenReturnObject,
} from '../specConstants';

/* eslint-disable @typescript-eslint/restrict-plus-operands */
describe('Werden verb conjugates correctly', () => {
  it('Werden conjugates correctly from config', () => {
    const result = hydrateVerb(werdenGermanVerb);

    expect(result).toStrictEqual(werdenReturnObject);
  });
});
/* eslint-enable @typescript-eslint/restrict-plus-operands */

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/spec/hydrateCoreIrregularVerb.spec.ts -t "Werden conjugates correctly from config"
