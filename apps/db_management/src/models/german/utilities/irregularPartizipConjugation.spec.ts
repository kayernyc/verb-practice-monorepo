import { generateStems } from './generateStems';
import { irregularPartizipConjugation } from './irregularPartizipConjugation';

describe('irregularPartizipConjugation handles irregulars', () => {
  it('conjugates haben partizip correctly', () => {
    const [stem] = generateStems('haben');
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
    const [stem] = generateStems('schwimmen');
    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'o',
      infinitive: 'schwimmen',
    });
    expect(partizip).toEqual('geschwommen');
  });

  it('conjugates bringen partizip correctly', () => {
    const [stem] = generateStems('bringen');
    const partizip = irregularPartizipConjugation({
      stem,
      infinitive: 'bringen',
      präteritum: 'ach',
      weakEndings: true,
    });
    expect(partizip).toEqual('gebracht');
  });

  it('conjugates denken partizip correctly', () => {
    const [stem] = generateStems('denken');
    const partizip = irregularPartizipConjugation({
      stem,
      infinitive: 'denken',
      präteritum: 'ach',
      weakEndings: true,
    });
    expect(partizip).toEqual('gedacht');
  });

  it('conjugates brennen partizip correctly', () => {
    const [stem] = generateStems('brennen');
    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'a',
      infinitive: 'brennen',
      weakEndings: true,
    });
    expect(partizip).toEqual('gebrannt');
  });

  it('conjugates verkaufen partizip correctly', () => {
    const [stem] = generateStems('verkaufen');
    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'a',
      infinitive: 'verkaufen',
    });
    expect(partizip).toEqual('verkauft');
  });

  it('conjugates gehen partizip correctly', () => {
    const [stem] = generateStems('gehen');
    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'ang',
      infinitive: 'gehen',
      präteritum: 'ing',
    });
    expect(partizip).toEqual('gegangen');
  });

  it('conjugates genießen partizip correctly', () => {
    const [stem] = generateStems('genießen');
    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'oss',
      infinitive: 'genießen',
      präteritum: 'oss',
    });
    expect(partizip).toEqual('genossen');
  });

  it('conjugates gelingen partizip correctly', () => {
    const [stem] = generateStems('gelingen');
    const partizip = irregularPartizipConjugation({
      stem,
      partizip: 'u',
      infinitive: 'gelingen',
      präteritum: 'a',
    });
    expect(partizip).toEqual('gelungen');
  });
});
