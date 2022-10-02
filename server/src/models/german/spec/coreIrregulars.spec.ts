import { GermanVerb } from '@german/germanTypes';
import generateStems from '../hydrationFunctions/generateStems';
import hydrateIrregularStems from '../hydrationFunctions/hydrateIrregularStems';
import {
  habenReturnObject,
} from './specConstants';

describe('haben is correctly conjugated', () => {
  const config: GermanVerb = {
    drop: false,
    strong: true,
    weakEndings: true,
    hilfsverb: 'haben',
    infinitive: 'haben',
    languages: { en: 'to have' },
    stems: { duEs: 'ha', präteritum: 't', partizip: 'b' },
  };

  const returnObject = {
    hilfsverb: 'haben',
    infinitive: 'haben',
    partizip: 'habt',
    präsens: {
      1033: 'habe',
      1041: 'haben',
      1098: 'habst',
      1106: 'habt',
      1548: 'habt',
    },
    konjunktiv: {
      1033: 'habe',
      1041: 'haben',
      1098: 'habest',
      1106: 'habet',
      1548: 'habe',
    },
    präteritum: {
      1033: 'habte',
      1041: 'habten',
      1098: 'habtest',
      1106: 'habtet',
      1548: 'habte',
    },
  };

  it('removes the ending of haben correctly', () => {
    expect(generateStems(config)).toEqual('hab');
  });

  it('generates the irregular stems of haben correctly', () => {
    const result = hydrateIrregularStems({ infinitiveStem: 'hab', returnObject, verbConfiguration: config });
    expect(result).toEqual(habenReturnObject);
  });
});
