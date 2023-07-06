/*
  This test guards against unintentional changes to the schema. It's not
  a complete test of all possible things that could go wrong.

  TODO: Add more tests
*/

import { convertGermanVerbToHydratedGermanVerb } from './germanDBModel';
import { GermanVerbHydrated } from 'german-types';
import { abblenden, expected } from './germanDBModelSpecConstants';

describe('convertGermanVerbToHydratedGermanVerb', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-01').getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('transforms German Hydrated Verb blenden to a Mongoose model', () => {
    const result = convertGermanVerbToHydratedGermanVerb(
      abblenden as GermanVerbHydrated,
    );

    expect(result).toStrictEqual(expected);
  });
});
