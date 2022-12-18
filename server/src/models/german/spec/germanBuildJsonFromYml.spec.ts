import mock from 'mock-fs';

import fs from 'fs';
import sinon from 'sinon';
import { createVerb, DataObj, germanVerbData } from '../germanBuildJsonFromYml';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('./@models/shared/readYaml', () => ({
  __esModule: true,
  ...jest.requireActual('./@models/shared/readYaml'),
  findRelativePathToData: () => './data/',
}));

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

const fileOne = `date: 15

  ratten:
    language: de
    translations:
      en: guess
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b
      `;

const fileTwo = `
  ratten:
    language: de
    translations:
      en: speak
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b
        `;

const fileThree = `date: 16

  ratten:
    language: de
    translations:
      en: guess, advise
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b

  bobben:
    language: de
    translations:
      en: to have a test
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b
        `;

const fileFour = `date: 17

  fehlen:
    language: de
    translations:
      en: feel
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b

  suchen:
    language: de
    translations:
      en: to have a test
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b
        `;

const fileFive = `date: bob
  fliegen:
    language: de
    translations:
      en: to have a test
    tags:
      - hilfsverb
    strong:
    weak endings: true
    stems:
      präsens du/es: ha
      präteritum: t
      partizip: b
  `;

describe('createVerb', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('populates sein correctly', () => {
    const dataObj: DataObj = {
      translations:
        { en: 'to be' },
      tags: ['hilfsverb'],
      strong: true,
      hilfsverb: 'sein',
      partizip: 'gewesen',
      stems: { präteritum: 'war' },
      irregular: {
        präsens: {
          ich: 'bin',
          du: 'bist',
          es: 'ist',
          wir: 'sind',
          ihr: 'seid',
        },
      },
    };

    const result = createVerb('sein', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'sein',
      translations: { en: 'to be' },
      stems: { präteritum: 'war' },
      strong: true,
      irregular: {
        präsens: {
          1033: 'bin',
          1041: 'sind',
          1098: 'bist',
          1106: 'seid',
          1548: 'ist',
        },
      },
      partizip: 'gewesen',
    };
    expect(result).toEqual(expected);
  });

  it('populates fallen correctly', () => {
    const dataObj: DataObj = {
      translations:
        { en: 'to fall' },
      strong: true,
      hilfsverb: 'sein',
      stems: { 'präsens du/es': 'ä', k2präsens: 'iel' },
    };
    const result = createVerb('fallen', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'fallen',
      translations: { en: 'to fall' },
      stems: {
        duEs: 'ä',
        k2präsens: 'iel',
      },
      strong: true,
    };
    expect(result).toEqual(expected);
  });

  it('populates schwimmen correctly', () => {
    const dataObj: DataObj = {
      translations:
        { en: 'to swim' },
      hilfsverb: 'sein',
      strong: true,
      stems: { partizip: 'o', präteritum: 'a' },
    };
    const result = createVerb('schwimmen', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'sein',
      infinitive: 'schwimmen',
      translations: { en: 'to swim' },
      stems: {
        partizip: 'o',
        präteritum: 'a',
      },
      strong: true,
    };
    expect(result).toEqual(expected);
  });

  it('populates beraten correctly', () => {
    const dataObj: DataObj = { translations: { en: 'to advise, to discuss' } };
    const result = createVerb('beraten', dataObj);
    const expected = {
      language: 'de',
      drop: false,
      hilfsverb: 'haben',
      infinitive: 'beraten',
      translations: {
        en: 'to advise, to discuss',
      },
    };
    expect(result).toEqual(expected);
  });
});

describe('germanVerbData', () => {
  const originalPWD = process.env.PWD;
  let writeFileSync: sinon.SinonStub;

  beforeEach(() => {
    process.env.PWD = './';
    writeFileSync = sinon.stub(fs, 'writeFileSync').returns();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mock({
      'german1.yaml': fileOne,
      'german2.yaml': fileTwo,
      'german3.yaml': fileThree,
      'german4.yaml': fileFour,
      'german5.yaml': fileFive,
      data: {},
    });
  });

  afterEach(() => {
    process.env.PWD = originalPWD;
    mock.restore();
    writeFileSync.restore();
  });

  it('reads files', () => {
    // research how to mock yaml
    germanVerbData();
    expect(writeFileSync.callCount).toBe(1);
    // expect(result).toEqual(expected);
  });
});
