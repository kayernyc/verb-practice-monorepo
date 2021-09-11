import { GermanPronounKeys } from "./germanTypes";
import { GermanPronoun } from "./germanConstants";

const germanPronounKeys = Object.keys(GermanPronounKeys)

describe('German prounoun keys are valid formulas for pronouns', () => {
  for (const pronounKey of germanPronounKeys) {
    const testPronounNumber = GermanPronounKeys[pronounKey];
    it(`The formula for pronoun key ${pronounKey}: ${testPronounNumber} returns the correct pronoun`, () => {
      const testValue = GermanPronoun(testPronounNumber);
      expect(testValue).toBe(pronounKey);
    });
  }
})

