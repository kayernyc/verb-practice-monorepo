import irregularPartizipConjugation from '../irregularPartizipConjugation';
import generateStems from '../generateStems';

describe('irregularPartizipConjugation handles irregulars', () => {
  it('conjugates haben partizip correctly', () => {
    const config = {
      drop: false,
      weekEndings: true,
      hilfsverb: 'haben',
      infinitive: 'haben',
      languages: { en: 'to have' },
      stems: { duEs: 'ha', präteritum: 't', partizip: 'b' },
      strong: true,
    };
    const stem = generateStems(config);
    // infinitiveStem, infinitive, partizip, präteritum, stemPartizip, weakEndings,
    const partizip = irregularPartizipConjugation({
      stem,
      infinitive: 'haben',
      präteritum: 't',
      partizip: 'b',
      weakEndings: true,
    });
    expect(partizip).toEqual('gehabt');
  });

  it('conjugates schwimmen partizip correctly', () => {
    const config = {
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'schwimmen',
      languages: { en: 'to swim' },
      stems: { partizip: 'o', präteritum: 'a' },
      strong: true,
    };
    const stem = generateStems(config);

    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'o',
      infinitive: 'schwimmen',
    });
    expect(partizip).toEqual('geschwommen');
  });

  it('conjugates bringen partizip correctly', () => {
    const config = {
      drop: false,
      weekEndings: true,
      hilfsverb: 'haben',
      infinitive: 'bringen',
      languages: { en: 'to bring, to take' },
      strong: true,
      stems: { präteritum: 'ach' },
    };
    const stem = generateStems(config);

    const partizip = irregularPartizipConjugation({
      stem,
      infinitive: 'bringen',
      präteritum: 'ach',
      weakEndings: true,
    });
    expect(partizip).toEqual('gebracht');
  });

  it('conjugates denken partizip correctly', () => {
    const config = {
      drop: false,
      weakEndings: true,
      hilfsverb: 'haben',
      infinitive: 'denken',
      languages: { en: 'to think, to guess' },
      strong: true,
      stems: { präteritum: 'ach' },
    };
    const stem = generateStems(config);

    const partizip = irregularPartizipConjugation({
      stem,
      infinitive: 'denken',
      präteritum: 'ach',
      weakEndings: true,
    });
    expect(partizip).toEqual('gedacht');
  });

  it('conjugates brennen partizip correctly', () => {
    const config = {
      drop: false,
      hilfsverb: 'haben',
      weakEndings: true,
      infinitive: 'brennen',
      languages: { en: 'to burn, to shine, to distil' },
      strong: true,
      stems: { präteritum: 'a', k2präsens: 'e', partizip: 'a' },
    };
    const stem = generateStems(config);

    const partizip = irregularPartizipConjugation({ stem, partizip: 'a', infinitive: 'brennen', weakEndings: true });
    expect(partizip).toEqual('gebrannt');
  });

  it('conjugates verkaufen partizip correctly', () => {
    const config = {
      drop: false,
      hilfsverb: 'haben',
      infinitive: 'verkaufen',
      languages: { en: 'to sell' },
    };
    const stem = generateStems(config);

    const partizip = irregularPartizipConjugation({ stem, partizip: 'a', infinitive: 'verkaufen' });
    expect(partizip).toEqual('verkauft');
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i src/models/german/hydrationFunctions/spec/irregularPartizipConjugation.spec.ts
