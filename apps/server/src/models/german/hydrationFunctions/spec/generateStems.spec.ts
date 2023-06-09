import { GermanVerb } from '@german/germanTypes';
import generateStems from '../generateStems';

describe('generateStems creates the correct stem', () => {
  const testConfig: { config: GermanVerb; expected: string }[] = [
    {
      config: {
        language: 'de',
        drop: false,
        strong: true,
        hilfsverb: 'sein',
        infinitive: 'fallen',
        translations: { en: 'to fall' },
        stems: { duEs: 'ä', präteritum: 'iel', k2präsens: 'iel' },
      },
      expected: 'fall',
    },
    {
      config: {
        language: 'de',
        drop: false,
        hilfsverb: 'haben',
        infinitive: 'sammeln',
        translations: { en: 'to gather, to collect' },
        strong: false,
      },
      expected: 'sammel',
    },
    {
      config: {
        language: 'de',
        drop: false,
        hilfsverb: 'haben',
        infinitive: 'mißsammeln',
        translations: { en: 'to gather, to miscollect' },
        strong: false,
      },
      expected: 'mißsammel',
    },
    {
      config: {
        language: 'de',
        drop: false,
        hilfsverb: 'haben',
        infinitive: 'be|sammeln',
        translations: { en: 'to gather, to be causing something' },
        strong: false,
      },
      expected: 'sammel',
    },
  ];

  testConfig.forEach(({ config, expected }: { config: GermanVerb; expected: string }) => {
    it(`removes the ending of ${config.infinitive} correctly`, () => {
      expect(generateStems(config)).toEqual(expected);
    });
  });
});
