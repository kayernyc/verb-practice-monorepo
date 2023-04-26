import mock from 'mock-fs';

import { EnglishJsonData } from '@english/englishTypes';

import {
  hydrateFromInfinitive,
  hydrateVerb,
  importJsonData,
  standardHydration,
} from '../hydrateEnglishVerb';

const move = {
  infinitive: 'move',
  language: 'en',
  translations: {
    de: 'machen',
  },
};

const panic = {
  infinitive: 'panic',
  language: 'en',
  translations: {
    de: 'machen',
  },
};

const ship = {
  infinitive: 'ship',
  language: 'en',
  translations: {
    de: 'shipchen',
  },
};

const tryVerb = {
  infinitive: 'try',
  language: 'en',
  translations: {
    de: 'versuchen',
  },
};

const call = {
  infinitive: 'call',
  language: 'en',
  translations: {
    de: 'rufen',
  },
};

describe('hydrate regular verb', () => {
  it('correctly hydrates a simple regular verb call', () => {
    const hydratedCall = {
      present: {
        i: 'call',
        it: 'calls',
        we: 'call',
      },
      past: {
        i: 'called',
        it: 'called',
        we: 'called',
      },
      infinitive: 'call',
      participle: 'called',
      presentParticiple: 'calling',
    };

    const result = standardHydration(call);

    expect(result).toEqual(hydratedCall);
  });

  it('correctly hydrates a simple regular verb play', () => {
    const play = {
      infinitive: 'play',
      language: 'en',
      translations: {
        de: 'spielen',
      },
    };

    const hydratedPlay = {
      present: {
        i: 'play',
        it: 'plays',
        we: 'play',
      },
      past: {
        i: 'played',
        it: 'played',
        we: 'played',
      },
      infinitive: 'play',
      participle: 'played',
      presentParticiple: 'playing',
    };

    const result = standardHydration(play);

    expect(result).toEqual(hydratedPlay);
  });

  it('correctly hydrates a simple regular verb ending in an e', () => {
    const hydratedCall = {
      present: {
        i: 'move',
        it: 'moves',
        we: 'move',
      },
      past: {
        i: 'moved',
        it: 'moved',
        we: 'moved',
      },
      infinitive: 'move',
      participle: 'moved',
      presentParticiple: 'moving',
    };

    const result = standardHydration(move);

    expect(result).toEqual(hydratedCall);
  });

  it('correctly hydrates a simple regular verb ending in c', () => {
    const hydratedCall = {
      present: {
        i: 'panic',
        it: 'panics',
        we: 'panic',
      },
      past: {
        i: 'panicked',
        it: 'panicked',
        we: 'panicked',
      },
      infinitive: 'panic',
      participle: 'panicked',
      presentParticiple: 'panicking',
    };

    const result = standardHydration(panic);

    expect(result).toEqual(hydratedCall);
  });

  it('correctly hydrates a simple regular verb ending in a consonant followed by y', () => {
    const hydratedCall = {
      present: {
        i: 'try',
        it: 'tries',
        we: 'try',
      },
      past: {
        i: 'tried',
        it: 'tried',
        we: 'tried',
      },
      infinitive: 'try',
      participle: 'tried',
      presentParticiple: 'trying',
    };

    const result = standardHydration(tryVerb);

    expect(result).toEqual(hydratedCall);
  });

  it('correctly hydrates a simple regular verb ending in a vowel plus a consonant', () => {
    const hydratedCall = {
      present: {
        i: 'ship',
        it: 'ships',
        we: 'ship',
      },
      past: {
        i: 'shipped',
        it: 'shipped',
        we: 'shipped',
      },
      infinitive: 'ship',
      participle: 'shipped',
      presentParticiple: 'shipping',
    };

    const result = standardHydration(ship);

    expect(result).toEqual(hydratedCall);
  });
});

describe('hydrateVerb', () => {
  it('returns a hydrated verb', () => {
    const expected = {
      infinitive: 'move',
      participle: 'moved',
      past: { i: 'moved', it: 'moved', we: 'moved' },
      present: { i: 'move', it: 'moves', we: 'move' },
      presentParticiple: 'moving',
    };

    const result = hydrateVerb(move);
    expect(result).toStrictEqual(expected);
  });
});

describe('write and import functions', () => {
  beforeEach(() => {
    const fileOne = `date: 16

    have:
      language: en
      translations:
        de: haben
      participle: had
      irregular:
        present:
          i: have
          it: has
          we: have
        past: had
        `;

    const fileTwo = `date: 16

    adapt:
      language: en
      translations:
        fr: adapter
        `;

    mock({
      'phil.yaml': fileOne,
      'rick.yaml': fileOne,
      'sue.yaml': fileTwo,
      data: {
        bob: fileTwo,
      },
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it("throws error if englishVerbsUnhydrated doesn't exist.", () => {
    expect(() => {
      importJsonData();
    }).toThrow('English data file not found: unknown error');
  });
});

describe('hydrateFromInfinitive', () => {
  const verbsData: EnglishJsonData = {
    date: 12344567,
    verbs: {
      move: { infinitive: 'move', language: 'en', translations: { de: ['bewegen', 'um|ziehen'] } },
    },
  };

  it('returns an hydrated verb if it exists in the verbsData object.', () => {
    const result = hydrateFromInfinitive('move', verbsData);
    const expected = {
      infinitive: 'move',
      participle: 'moved',
      past: { i: 'moved', it: 'moved', we: 'moved' },
      present: { i: 'move', it: 'moves', we: 'move' },
      presentParticiple: 'moving',
    };

    expect(expected).toStrictEqual(result);
  });

  it("returns an infinitve if it doesn't exist in the verbsData object.", () => {
    const result = hydrateFromInfinitive('panic', verbsData);
    const expected = 'panic';

    expect(expected).toStrictEqual(result);
  });
});
