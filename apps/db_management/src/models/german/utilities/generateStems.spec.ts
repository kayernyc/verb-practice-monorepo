import { GermanVerb } from 'german-types';
import { generateStems } from './generateStems';
import { LanguageMap } from 'global-types';

describe('generateStems creates the correct stem', () => {
  const testConfig: { infinitive: string; expected: string }[] = [
    {
      infinitive: 'fallen',
      expected: 'fall',
    },
    {
      infinitive: 'sammeln',
      expected: 'sammel',
    },
    {
      infinitive: 'mißsammeln',
      expected: 'mißsammel',
    },
    {
      infinitive: 'be|sammeln',
      expected: 'sammel',
    },
  ];

  testConfig.forEach(
    ({ infinitive, expected }: { infinitive: string; expected: string }) => {
      it(`removes the ending of ${infinitive} correctly`, () => {
        expect(generateStems(infinitive)).toEqual(expected);
      });
    },
  );
});
