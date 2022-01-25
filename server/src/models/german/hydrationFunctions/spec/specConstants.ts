import {
  GermanPronounKeys, GermanStems, GermanTenses, GermanVerb,
} from '@german/germanTypes';

export const seinGermanVerb: GermanVerb = {
  drop: false,
  hilfsverb: 'haben',
  infinitive: 'sein',
  irregular: {
    [GermanTenses.präsens]: {
      [GermanPronounKeys.ich]: 'bin',
      [GermanPronounKeys.wir]: 'sind',
      [GermanPronounKeys.du]: 'bist',
      [GermanPronounKeys.ihr]: 'seid',
      [GermanPronounKeys.es]: 'ist',
    },
  },
  languages: { en: 'to be' },
  partizip: 'gewesen',
  stems: { [GermanStems.präteritum]: 'war' },
  strong: true,
  weakEndings: false,
};

export const seinReturnObject = {
  partizip: 'gewesen',
  präsens: {
    [GermanPronounKeys.ich]: 'see',
    [GermanPronounKeys.wir]: 'sest',
    [GermanPronounKeys.du]: 'sest',
    [GermanPronounKeys.ihr]: 'set',
    [GermanPronounKeys.es]: 'set',
  },
  präteritum: {
    [GermanPronounKeys.ich]: 'see',
    [GermanPronounKeys.wir]: 'sest',
    [GermanPronounKeys.du]: 'sest',
    [GermanPronounKeys.ihr]: 'set',
    [GermanPronounKeys.es]: 'set',
  },
  konjunktiv: {
    [GermanPronounKeys.ich]: 'swar',
    [GermanPronounKeys.wir]: 'swaren',
    [GermanPronounKeys.du]: 'swarst',
    [GermanPronounKeys.ihr]: 'swart',
    [GermanPronounKeys.es]: 'swar',
  },
};

export const seinPräteritumExpected = {
  [GermanPronounKeys.ich]: 'war',
  [GermanPronounKeys.wir]: 'waren',
  [GermanPronounKeys.du]: 'warst',
  [GermanPronounKeys.ihr]: 'wart',
  [GermanPronounKeys.es]: 'war',
};

export const habenGermanVerb: GermanVerb = {
  drop: false,
  hilfsverb: 'haben',
  infinitive: 'haben',
  languages: { en: 'to have' },
  stems: { [GermanStems.duEs]: 'ha', [GermanStems.präteritum]: 't', [GermanStems.partizip]: 'b' },
  strong: true,
  weakEndings: true,
};

export const habenReturnObject = {
  partizip: 'gehabt',
  präsens: {
    [GermanPronounKeys.ich]: 'habe',
    [GermanPronounKeys.wir]: 'haben',
    [GermanPronounKeys.du]: 'hast',
    [GermanPronounKeys.ihr]: 'habt',
    [GermanPronounKeys.es]: 'hat',
  },
  präteritum: {
    [GermanPronounKeys.ich]: 'habe',
    [GermanPronounKeys.wir]: 'haben',
    [GermanPronounKeys.du]: 'habest',
    [GermanPronounKeys.ihr]: 'habet',
    [GermanPronounKeys.es]: 'habet',
  },
  konjunktiv: {
    [GermanPronounKeys.ich]: 'habe',
    [GermanPronounKeys.wir]: 'haben',
    [GermanPronounKeys.du]: 'habest',
    [GermanPronounKeys.ihr]: 'habet',
    [GermanPronounKeys.es]: 'habet',
  },
};

export const habenPräteritumExpected = {
  [GermanPronounKeys.ich]: 'hatte',
  [GermanPronounKeys.wir]: 'hatten',
  [GermanPronounKeys.du]: 'hattest',
  [GermanPronounKeys.ihr]: 'hattet',
  [GermanPronounKeys.es]: 'hatte',
};
