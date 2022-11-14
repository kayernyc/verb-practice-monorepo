import { standardHydration } from '../hydrateEnglishVerb';


describe('hydrate regular verb', () => {
  it('correctly hydrates a simple regular verb call', () => {
    const call = {
      infinitive: 'call',
      translations: {
        de: 'rufen',
      },
    };

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
    const move = {
      infinitive: 'move',
      translations: {
        de: 'machen',
      },
    };

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
    const move = {
      infinitive: 'panic',
      translations: {
        de: 'machen',
      },
    };

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

    const result = standardHydration(move);

    expect(result).toEqual(hydratedCall);
  });

  it('correctly hydrates a simple regular verb ending in a consonant followed by y', () => {
    const move = {
      infinitive: 'try',
      translations: {
        de: 'versuchen',
      },
    };

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

    const result = standardHydration(move);

    expect(result).toEqual(hydratedCall);
  });

  it('correctly hydrates a simple regular verb ending in a vowel plus a consonant', () => {
    const move = {
      infinitive: 'ship',
      translations: {
        de: 'versuchen',
      },
    };

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

    const result = standardHydration(move);

    expect(result).toEqual(hydratedCall);
  });
});
