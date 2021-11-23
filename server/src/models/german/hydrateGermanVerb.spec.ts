import { GermanVerb } from './germanTypes';
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
      drop: false, hilfsverb: 'haben', infinitive: 'bedeuten', languages: { en: 'to mean' }, strong: false,
    },
    'ein­at­men': { drop: false, hilfsverb: 'haben', infinitive: 'ein­at­men' },
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
      ich: 'schaue', du: 'schaust', es: 'schaut', wir: 'schauen', ihr: 'schaut',
    },
    präteritum: {
      ich: 'schaute', du: 'schautest', es: 'schaute', wir: 'schauten', ihr: 'schautet',
    },
    konjunktiv: {
      ich: 'schaue', du: 'schauest', es: 'schaue', wir: 'schauen', ihr: 'schauet',
    },
  };
  const config: GermanVerb = {
    drop: false, hilfsverb: 'haben', infinitive: 'schauen', languages: { en: 'to look, to see' },
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
      ich: 'falle',
      du: 'fällst',
      es: 'fällt',
      wir: 'fallen',
      ihr: 'fallt',
    },
    präteritum:
    {
      ich: 'fiel',
      du: 'fielst',
      es: 'fiel',
      wir: 'fielen',
      ihr: 'fielt',
    },
    konjunktiv:
    {
      ich: 'fiele',
      du: 'fielest',
      es: 'fiele',
      wir: 'fielen',
      ihr: 'fielet',
    },
  };

  const config: GermanVerb = {
    drop: false, strong: true, hilfsverb: 'sein', infinitive: 'fallen', languages: { en: 'to fall' }, stems: { duEs: 'ä', präteritum: 'iel', k2präsens: 'iel' },
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
