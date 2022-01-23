import { GermanVerb, GermanPronounKeys } from './germanTypes';
import { hydrateFromInfinitive, hydrateVerb, kranton } from './hydrateGermanVerb';

/* eslint-disable @typescript-eslint/restrict-plus-operands */
describe('kranton returns true', () => {
  it('returns true for a stem ending in d', () => {
    const result = kranton('cadd');
    expect(result).toBeTruthy();
  });

  it('returns true for a stem ending in t', () => {
    const result = kranton('catt');
    expect(result).toBeTruthy();
  });

  it('returns true for a stem ending in vnn', () => {
    const result = kranton('cann');
    expect(result).toBeTruthy();
  });

  it('returns true for a stem ending in vmm', () => {
    const result = kranton('camm');
    expect(result).toBeTruthy();
  });

  it('returns true for a stem ending in v(lrh)(mn)', () => {
    const result = kranton('calm');
    expect(result).toBeTruthy();
  });
});

describe('kranton returns false', () => {
  it('returns false for a stem ending in vtn', () => {
    const result = kranton('catn');
    expect(result).toBeFalsy();
  });

  it('returns false for a stem not ending in d, t, vn(n), vm(m) or v(lrh)(mn)', () => {
    const result = kranton('bobb');
    expect(result).toBeFalsy();
  });
});

describe('hydrateFromInfinitive returns correctly', () => {
  const germanData = {
    date: 1633815078298,
    bedeuten: {
      drop: false,
      hilfsverb: 'haben',
      infinitive: 'bedeuten',
      languages: { en: 'to mean' },
      strong: false,
    },
    einatmen: {
      drop: false,
      hilfsverb: 'haben',
      infinitive: 'einatmen',
      languages: { en: 'to be meaningless' },
    },
  };

  it('returns the infitive if there is no data', () => {
    const result = hydrateFromInfinitive('bobben', germanData);
    expect(result).toStrictEqual(JSON.stringify('bobben'));
  });

  it('returns a json if there is data', () => {
    const result = hydrateFromInfinitive('bedeuten', germanData);
    expect(result).not.toBeNull();
  });
});

describe('Weak verb conjugates correctly', () => {
  const expected = {
    partizip: 'geschaut',
    präsens: {
      [GermanPronounKeys.ich]: 'schaue',
      [GermanPronounKeys.du]: 'schaust',
      [GermanPronounKeys.es]: 'schaut',
      [GermanPronounKeys.wir]: 'schauen',
      [GermanPronounKeys.ihr]: 'schaut',
    },
    präteritum: {
      [GermanPronounKeys.ich]: 'schaute',
      [GermanPronounKeys.du]: 'schautest',
      [GermanPronounKeys.es]: 'schaute',
      [GermanPronounKeys.wir]: 'schauten',
      [GermanPronounKeys.ihr]: 'schautet',
    },
    konjunktiv: {
      [GermanPronounKeys.ich]: 'schaue',
      [GermanPronounKeys.du]: 'schauest',
      [GermanPronounKeys.es]: 'schaue',
      [GermanPronounKeys.wir]: 'schauen',
      [GermanPronounKeys.ihr]: 'schauet',
    },
  };
  const config: GermanVerb = {
    drop: false,
    hilfsverb: 'haben',
    infinitive: 'schauen',
    languages: { en: 'to look, to see' },
  };

  it('Schauen conjugates correctly from minimal config', () => {
    const result = hydrateVerb(config);

    expect(result).toStrictEqual(expected);
  });
});

describe('Fallen conjugates correctly', () => {
  const expected = {
    partizip: 'gefallen',
    präsens: {
      [GermanPronounKeys.ich]: 'falle',
      [GermanPronounKeys.du]: 'fällst',
      [GermanPronounKeys.es]: 'fällt',
      [GermanPronounKeys.wir]: 'fallen',
      [GermanPronounKeys.ihr]: 'fallt',
    },
    präteritum: {
      [GermanPronounKeys.ich]: 'fiel',
      [GermanPronounKeys.du]: 'fielst',
      [GermanPronounKeys.es]: 'fiel',
      [GermanPronounKeys.wir]: 'fielen',
      [GermanPronounKeys.ihr]: 'fielt',
    },
    konjunktiv: {
      [GermanPronounKeys.ich]: 'fiele',
      [GermanPronounKeys.du]: 'fielest',
      [GermanPronounKeys.es]: 'fiele',
      [GermanPronounKeys.wir]: 'fielen',
      [GermanPronounKeys.ihr]: 'fielet',
    },
  };

  const config: GermanVerb = {
    drop: false,
    strong: true,
    hilfsverb: 'sein',
    infinitive: 'fallen',
    languages: { en: 'to fall' },
    stems: { duEs: 'ä', präteritum: 'iel', k2präsens: 'iel' },
  };

  const result = hydrateVerb(config);

  it('Fallen conjugates partizip correctly from minimal config', () => {
    const { partizip: partizipExpect } = expected;
    const { partizip: partizipResult } = result;

    expect(partizipResult).toStrictEqual(partizipExpect);
  });

  it('Fallen conjugates präsens correctly from minimal config', () => {
    const { präsens: präsensExpect } = expected;
    const { präsens: präsensResult } = result;

    expect(präsensResult).toStrictEqual(präsensExpect);
  });

  it('Fallen conjugates präteritum correctly from minimal config', () => {
    const { präteritum: präteritumExpect } = expected;
    const { präteritum: präteritumResult } = result;

    expect(präteritumResult).toStrictEqual(präteritumExpect);
  });

  it('Fallen conjugates konjunktiv correctly from minimal config', () => {
    const { konjunktiv: konjunktivExpect } = expected;
    const { konjunktiv: konjunktivResult } = result;

    expect(konjunktivResult).toStrictEqual(konjunktivExpect);
  });

  it('Fallen conjugates correctly from minimal config', () => {
    expect(result).toStrictEqual(expected);
  });
});
/* eslint-enable @typescript-eslint/restrict-plus-operands */

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/hydrateGermanVerb.spec.ts -t "Fallen conjugates partizip correctly from minimal config"
