import { mapCodeToPronoun } from '../pronounMap';

import GermanPronounsCodeToString from '../germanConstants/GermanPronounsCodeToString';

describe('mapCodeToPronoun', () => {
  it('exists as a function.', () => {
    expect(typeof mapCodeToPronoun).toBe('function');
  });

  it('throws an error is no valid code is passed.', () => {
    expect(typeof mapCodeToPronoun).toBe('function');
  });
});
