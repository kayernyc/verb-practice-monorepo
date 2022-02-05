import { GermanVerb } from '@german/germanTypes';
import generateStems from '../generateStems';

describe('generateStems creates the correct stem', () => {
  const testConfig: { config: GermanVerb; expected: string }[] = [
    {
      config: {
        drop: false,
        strong: true,
        hilfsverb: 'sein',
        infinitive: 'fallen',
        languages: { en: 'to fall' },
        stems: { duEs: 'ä', präteritum: 'iel', k2präsens: 'iel' },
      },
      expected: 'fall',
    },
    {
      config: {
        drop: false,
        hilfsverb: 'haben',
        infinitive: 'sammeln',
        languages: { en: 'to gather, to collect' },
        strong: false,
      },
      expected: 'sammel',
    },
    {
      config: {
        drop: false,
        hilfsverb: 'haben',
        infinitive: 'mißsammeln',
        languages: { en: 'to gather, to miscollect' },
        strong: false,
      },
      expected: 'mißsammel',
    },
    {
      config: {
        drop: false,
        hilfsverb: 'haben',
        infinitive: 'be|sammeln',
        languages: { en: 'to gather, to be causing something' },
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
