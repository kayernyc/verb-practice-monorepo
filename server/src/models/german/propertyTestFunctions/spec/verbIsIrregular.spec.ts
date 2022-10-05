import { DataObj } from '@german/germanVerbs';
import verbIsIrregular from '../verbIsIrregular';

describe('verbIsIrregular correctly determines the state of the verb', () => {
  it('flags fallen as not irregular', () => {
    const fallenObj: DataObj = {
      translations:
        { en: 'to fall' },
    };
    const result = verbIsIrregular(fallenObj);
    expect(result).not.toBeTruthy();
  });

  it('flags sein as irregular', () => {
    const fallenObj: DataObj = {
      translations:
        { en: 'to be' },
      tags: ['hilfsverb'],
      hilfsverb: 'sein',
      partizip: 'gewesen',
      strong: true,
      stems: { präteritum: 'war' },
      irregular: {
        präsens: {
          ich: 'bin', du: 'bist', es: 'ist', wir: 'sind', ihr: 'seid',
        },
      },
      'weak endings': false,
    };

    const result = verbIsIrregular(fallenObj);
    expect(result).toBeTruthy();
  });
});

// eslint-disable-next-line max-len
// node node_modules/jest/bin/jest.js -i server/src/models/german/testFunctions/spec/verbIsIrregular.spec.ts -t "verbIsIrregular correctly determines the state of the verb"
