import { generateStems } from './generateStems';

describe('generateStems creates the correct stem', () => {
  const testConfig: { infinitive: string; expected: [string, string] }[] = [
    {
      infinitive: 'fallen',
      expected: ['fall', ''],
    },
    {
      infinitive: 'sammeln',
      expected: ['sammel', ''],
    },
    {
      infinitive: 'mißsammeln',
      expected: ['mißsammel', ''],
    },
    {
      infinitive: 'be|sammeln',
      expected: ['sammel', ''],
    },
    {
      infinitive: 'gehen',
      expected: ['geh', ''],
    },
    {
      infinitive: 'genießen',
      expected: ['nieß', 'ge'],
    },
    {
      infinitive: 'gelingen',
      expected: ['ling', 'ge'],
    },
  ];

  testConfig.forEach(
    ({
      infinitive,
      expected,
    }: {
      infinitive: string;
      expected: [string, string];
    }) => {
      it(`removes the ending of ${infinitive} correctly`, () => {
        expect(generateStems(infinitive)).toEqual(expected);
      });
    },
  );
});
