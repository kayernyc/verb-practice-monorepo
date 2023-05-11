import { generateStems } from '@germanUtilities/generateStems';
import { hydrateIrregularPartizipConjugation } from './hydrateIrregularPartizipConjugation';

describe('irregularPartizipConjugation handles irregulars', () => {
  it('conjugates haben partizip correctly', () => {
    const [stem] = generateStems('haben');
    const partizip = hydrateIrregularPartizipConjugation({
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
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      partizip: 'o',
      infinitive: 'schwimmen',
    });
    expect(partizip).toEqual('geschwommen');
  });

  it('conjugates bringen partizip correctly', () => {
    const [stem] = generateStems('bringen');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      infinitive: 'bringen',
      präteritum: 'ach',
      weakEndings: true,
    });
    expect(partizip).toEqual('gebracht');
  });

  it('conjugates denken partizip correctly', () => {
    const [stem] = generateStems('denken');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      infinitive: 'denken',
      präteritum: 'ach',
      weakEndings: true,
    });
    expect(partizip).toEqual('gedacht');
  });

  it('conjugates brennen partizip correctly', () => {
    const [stem] = generateStems('brennen');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      partizip: 'a',
      infinitive: 'brennen',
      weakEndings: true,
    });
    expect(partizip).toEqual('gebrannt');
  });

  it('conjugates verkaufen partizip correctly', () => {
    const [stem] = generateStems('verkaufen');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      partizip: 'a',
      infinitive: 'verkaufen',
    });
    expect(partizip).toEqual('verkauft');
  });

  it('conjugates gehen partizip correctly', () => {
    const [stem] = generateStems('gehen');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      partizip: 'ang',
      infinitive: 'gehen',
      präteritum: 'ing',
    });
    expect(partizip).toEqual('gegangen');
  });

  it('conjugates genießen partizip correctly', () => {
    const [stem] = generateStems('genießen');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      partizip: 'oss',
      infinitive: 'genießen',
      präteritum: 'oss',
    });
    expect(partizip).toEqual('genossen');
  });

  it('conjugates gelingen partizip correctly', () => {
    const [stem] = generateStems('gelingen');
    const partizip = hydrateIrregularPartizipConjugation({
      stem,
      partizip: 'u',
      infinitive: 'gelingen',
      präteritum: 'a',
    });
    expect(partizip).toEqual('gelungen');
  });
});
