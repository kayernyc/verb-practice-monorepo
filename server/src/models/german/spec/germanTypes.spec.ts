import { GermanPronounKeys } from '../germanTypes';
import GermanPronounsCodeToString from '../germanHydrateResponseFunctions/GermanPronounsCodeToString';

const germanPronounKeys = Object.keys(GermanPronounKeys);

function fomulatForPronounSpec(pronounKey: string, testPronounNumber: number) {
  it(`The formula for pronoun key ${pronounKey}: ${testPronounNumber} returns the correct pronoun`, () => {
    const testValue = GermanPronounsCodeToString(testPronounNumber);
    expect(testValue).toBe(pronounKey);
  });
}

describe('German prounoun keys are valid formulas for pronouns', () => {
  for (const pronounKey of germanPronounKeys) {
    const testPronounNumber: number = GermanPronounKeys[pronounKey];
    fomulatForPronounSpec(pronounKey, testPronounNumber);
  }
});
