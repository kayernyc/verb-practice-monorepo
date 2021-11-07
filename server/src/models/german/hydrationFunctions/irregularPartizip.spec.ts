import partizipConjugation from './partizipHydration';
import generateStems from './generateStems';

describe('partizipConjugation handles irregulars', () => {
  it('conjugates schwimmen partizip correctly', () => {
    const config = { 'drop': false, 'hilfsverb': 'sein', 'infinitive': 'schwimmen', 'languages': { 'en': 'to swim' }, 'stems': { 'partizip': 'o', 'präteritum': 'a' }, 'strong': true };
    const stem = generateStems(config);

    const partizip = partizipConjugation({ stem, partizip: 'o', infinitive: 'schwimmen', weakEndings: true })
    expect(partizip).toEqual('geschwommen');
  });

  it('conjugates bringen partizip correctly', () => {
    const config = { 'drop': false, 'weekEndings': true, 'hilfsverb': 'haben', 'infinitive': 'bringen', 'languages': { 'en': 'to bring, to take' }, 'strong': true, 'stems': { 'präteritum': 'ach' } };
    const stem = generateStems(config);

    const partizip = partizipConjugation({ stem, infinitive: 'bringen', präteritum: 'ach', weakEndings: true })
    expect(partizip).toEqual('gebracht');
  });

  it('conjugates denken partizip correctly', () => {
    const config = {
      "drop": false,
      "weakEndings": true,
      "hilfsverb": "haben",
      "infinitive": "denken",
      "languages": { "en": "to think, to guess" },
      "strong": true,
      "stems": { "präteritum": "ach" }
    };
    const stem = generateStems(config);

    const partizip = partizipConjugation({ stem, infinitive: 'denken', präteritum: 'ach', weakEndings: true })
    expect(partizip).toEqual('gedacht');
  });

  it('conjugates brennen partizip correctly', () => {
    const config = { 'drop': false, 'hilfsverb': 'haben', 'infinitive': 'brennen', 'languages': { 'en': 'to burn, to shine, to distil' }, 'strong': true, 'stems': { 'präteritum': 'a', 'k2präsens': 'e', 'partizip': 'a' } };
    const stem = generateStems(config);

    const partizip = partizipConjugation({ stem, partizip: 'a', infinitive: 'brennen' })
    expect(partizip).toEqual('gebrannt');
  });

  it('conjugates verkaufen partizip correctly', () => {
    const config = {
      "drop": false,
      "hilfsverb": "haben",
      "infinitive": "verkaufen",
      "languages": { "en": "to sell" }
    };
    const stem = generateStems(config);

    const partizip = partizipConjugation({ stem, partizip: 'a', infinitive: 'verkaufen' })
    expect(partizip).toEqual('verkauft');
  });


})